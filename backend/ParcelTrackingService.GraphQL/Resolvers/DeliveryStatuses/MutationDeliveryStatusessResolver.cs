using HotChocolate.Subscriptions;
using MapsterMapper;
using ParcelTrackingService.BLL.DTO;
using ParcelTrackingService.BLL.Exceptions;
using ParcelTrackingService.BLL.Services;
using ParcelTrackingService.DAL.Entities;
using ParcelTrackingService.DAL.UnitOfWork;
using ParcelTrackingService.GraphQL.Schema;

namespace ParcelTrackingService.GraphQL.Resolvers.DeliveryStatuses;

[ExtendObjectType(typeof(Mutation))]
public class MutationDeliveryStatusesResolver
{
    private BaseGraphQlMutationResolverService<
        DeliveryStatus,
        Guid,
        DeliveryStatusCreateDto,
        DeliveryStatusPatchDto
    > GraphQlMutationResolverService { get; } =
        new(unitOfWork => unitOfWork.DeliveryStatusesRepository);

    [Error(typeof(ParcelTrackingServiceException))]
    [UseProjection]
    public Task<DeliveryStatus?> AddDeliveryStatus(
        ParcelTrackingServiceUnitOfWork unitOfWork,
        [Service] IMapper mapper,
        ITopicEventSender sender,
        DeliveryStatusCreateDto createDto
    )
    {
        return GraphQlMutationResolverService.AddEntity(unitOfWork, mapper, createDto, OnSuccess);

        async void OnSuccess(DeliveryStatus entity) =>
            await sender.SendAsync(
                nameof(SubscriptionDeliveryStatusesResolver.DeliveryStatusCreated),
                entity.Id
            );
    }

    [Error(typeof(ParcelTrackingServiceException))]
    [UseProjection]
    public Task<DeliveryStatus?> DeleteDeliveryStatusById(
        ParcelTrackingServiceUnitOfWork unitOfWork,
        ITopicEventSender sender,
        Guid statusId
    )
    {
        return GraphQlMutationResolverService.DeleteEntity(unitOfWork, statusId, OnSuccess);

        async void OnSuccess(DeliveryStatus entity) =>
            await sender.SendAsync(
                nameof(SubscriptionDeliveryStatusesResolver.DeliveryStatusDeleted),
                entity.Id
            );
    }

    [Error(typeof(ParcelTrackingServiceException))]
    [UseProjection]
    public Task<DeliveryStatus?> UpdateDeliveryStatus(
        ParcelTrackingServiceUnitOfWork unitOfWork,
        [Service] IMapper mapper,
        ITopicEventSender sender,
        Guid statusId,
        DeliveryStatusPatchDto updateDto
    )
    {
        return GraphQlMutationResolverService.UpdateEntity(
            unitOfWork,
            mapper,
            statusId,
            updateDto,
            OnSuccess
        );

        async void OnSuccess(DeliveryStatus entity) =>
            await sender.SendAsync(
                nameof(SubscriptionDeliveryStatusesResolver.DeliveryStatusUpdated),
                entity.Id
            );
    }
}

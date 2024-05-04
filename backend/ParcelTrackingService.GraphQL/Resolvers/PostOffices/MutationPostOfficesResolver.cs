using HotChocolate.Subscriptions;
using MapsterMapper;
using ParcelTrackingService.DAL.Entities;
using ParcelTrackingService.DAL.UnitOfWork;
using ParcelTrackingService.GraphQL.Schema;
using ParcelTrackingService.WebCommon.DTO;
using ParcelTrackingService.WebCommon.Exceptions;
using ParcelTrackingService.WebCommon.Services;

namespace ParcelTrackingService.GraphQL.Resolvers.PostOffices;

[ExtendObjectType(typeof(Mutation))]
public class MutationPostOfficesResolver
{
    private BaseGraphQlMutationResolverService<
        PostOffice,
        Guid,
        PostOfficeCreateDto,
        PostOfficePatchDto
    > GraphQlMutationResolverService { get; } = new(unitOfWork => unitOfWork.PostOfficesRepository);

    [Error(typeof(ParcelTrackingServiceException))]
    public Task<PostOffice?> AddPostOffice(
        ParcelTrackingServiceUnitOfWork unitOfWork,
        [Service] IMapper mapper,
        ITopicEventSender sender,
        PostOfficeCreateDto createDto
    )
    {
        return GraphQlMutationResolverService.AddEntity(unitOfWork, mapper, createDto, OnSuccess);

        async void OnSuccess(PostOffice result) =>
            await sender.SendAsync(
                nameof(SubscriptionPostOfficesResolver.PostOfficeCreated),
                result
            );
    }

    public Task<PostOffice?> DeletePostOfficeById(
        ParcelTrackingServiceUnitOfWork unitOfWork,
        ITopicEventSender sender,
        Guid officeId
    )
    {
        return GraphQlMutationResolverService.DeleteEntity(unitOfWork, officeId, OnSuccess);

        async void OnSuccess(PostOffice result) =>
            await sender.SendAsync(
                nameof(SubscriptionPostOfficesResolver.PostOfficeDeleted),
                result
            );
    }

    public Task<PostOffice?> UpdatePostOffice(
        ParcelTrackingServiceUnitOfWork unitOfWork,
        [Service] IMapper mapper,
        ITopicEventSender sender,
        Guid officeId,
        PostOfficePatchDto updateDto
    )
    {
        return GraphQlMutationResolverService.UpdateEntity(
            unitOfWork,
            mapper,
            officeId,
            updateDto,
            OnSuccess
        );

        async void OnSuccess(PostOffice result) =>
            await sender.SendAsync(
                $"{nameof(SubscriptionPostOfficesResolver.PostOfficeUpdated)}-{officeId}",
                result
            );
    }
}

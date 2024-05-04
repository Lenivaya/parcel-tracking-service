using MapsterMapper;
using ParcelTrackingService.DAL.Entities;
using ParcelTrackingService.DAL.UnitOfWork;
using ParcelTrackingService.GraphQL.Schema;
using ParcelTrackingService.WebCommon.DTO;
using ParcelTrackingService.WebCommon.Exceptions;
using ParcelTrackingService.WebCommon.Services;

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
    public Task<DeliveryStatus?> AddDeliveryStatus(
        ParcelTrackingServiceUnitOfWork unitOfWork,
        [Service] IMapper mapper,
        DeliveryStatusCreateDto createDto
    )
    {
        return GraphQlMutationResolverService.AddEntity(unitOfWork, mapper, createDto);
    }

    public Task<DeliveryStatus?> DeleteDeliveryStatusById(
        ParcelTrackingServiceUnitOfWork unitOfWork,
        Guid statusId
    )
    {
        return GraphQlMutationResolverService.DeleteEntity(unitOfWork, statusId);
    }

    public Task<DeliveryStatus?> UpdateDeliveryStatus(
        ParcelTrackingServiceUnitOfWork unitOfWork,
        [Service] IMapper mapper,
        Guid statusId,
        DeliveryStatusPatchDto updateDto
    )
    {
        return GraphQlMutationResolverService.UpdateEntity(unitOfWork, mapper, statusId, updateDto);
    }
}

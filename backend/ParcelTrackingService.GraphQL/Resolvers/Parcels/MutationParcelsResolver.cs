using HotChocolate.Subscriptions;
using MapsterMapper;
using Microsoft.EntityFrameworkCore;
using ParcelTrackingService.DAL.Entities;
using ParcelTrackingService.DAL.UnitOfWork;
using ParcelTrackingService.GraphQL.Schema;
using ParcelTrackingService.WebCommon.DTO;
using ParcelTrackingService.WebCommon.Exceptions;
using ParcelTrackingService.WebCommon.Services;

namespace ParcelTrackingService.GraphQL.Resolvers.Parcels;

[ExtendObjectType(typeof(Mutation))]
public class MutationParcelsResolver
{
    private BaseGraphQlMutationResolverService<
        Parcel,
        Guid,
        ParcelCreateDto,
        ParcelPatchDto
    > GraphQlMutationResolverService { get; } = new(unitOfWork => unitOfWork.ParcelsRepository);

    [UseProjection]
    public Task<Parcel?> AddParcel(
        ParcelTrackingServiceUnitOfWork unitOfWork,
        [Service] IMapper mapper,
        ParcelCreateDto createDto
    )
    {
        return GraphQlMutationResolverService.AddEntity(unitOfWork, mapper, createDto);
    }

    [UseProjection]
    public Task<Parcel?> DeleteParcelById(ParcelTrackingServiceUnitOfWork unitOfWork, Guid parcelId)
    {
        return GraphQlMutationResolverService.DeleteEntity(unitOfWork, parcelId);
    }

    [Error(typeof(ParcelNotFoundException))]
    [UseProjection]
    public async Task<IQueryable<Parcel>> PushOneMoreParcelStatus(
        ParcelTrackingServiceUnitOfWork unitOfWork,
        [Service] IMapper mapper,
        ITopicEventSender sender,
        Guid parcelId,
        ParcelStatusDto createDto
    )
    {
        var parcel = await unitOfWork.ParcelsRepository.GetById(parcelId);
        if (parcel is null)
            throw new ParcelNotFoundException(parcelId.ToString());

        var parcelStatus = mapper.Map<ParcelStatus>(createDto);
        parcel.ParcelStatusHistory.Add(parcelStatus);
        await unitOfWork.SaveChanges();
        await sender.SendAsync(
            $"{nameof(SubscriptionParcelsResolver.ParcelStatusUpdated)}-{parcelId}",
            parcel.Id
        );

        return unitOfWork
            .ParcelsRepository.StartQuery()
            .AsNoTracking()
            .Where(p => p.Id == parcelId);
    }
}

using Microsoft.EntityFrameworkCore;
using ParcelTrackingService.DAL;
using ParcelTrackingService.DAL.Entities;
using ParcelTrackingService.GraphQL.Schema;

namespace ParcelTrackingService.GraphQL.Resolvers.Parcels;

[ExtendObjectType(typeof(Query))]
public class QueryParcelsResolver
{
    [UsePaging]
    [UseProjection]
    [UseFiltering]
    [UseSorting]
    public IQueryable<Parcel> GetParcels(ParcelTrackingServiceContext context)
    {
        return context.Parcels.AsNoTracking();
    }


    [UseFirstOrDefault]
    [UseProjection]
    public IQueryable<Parcel> GetParcelById(ParcelTrackingServiceContext context, Guid parcelId)
    {
        return context.Parcels.AsNoTracking().Where(parcel => parcel.Id == parcelId);
    }

    [UsePaging]
    [UseProjection]
    [UseFiltering]
    [UseSorting]
    public IQueryable<ParcelStatus> GetParcelHistory(
        ParcelTrackingServiceContext context,
        Guid parcelId
    )
    {
        return context
            .ParcelStatuses.AsNoTracking()
            .Where(parcelStatus => parcelStatus.ParcelId == parcelId);
    }

    [UseFirstOrDefault]
    [UseProjection]
    [UseFiltering]
    [UseSorting]
    public IQueryable<ParcelStatus> GetCurrentParcelStatus(
        ParcelTrackingServiceContext context,
        Guid parcelId
    )
    {
        return context
            .ParcelStatuses.AsNoTracking()
            .Where(parcelStatus => parcelStatus.ParcelId == parcelId)
            .OrderByDescending(parcelStatus => parcelStatus.Date);
    }
}
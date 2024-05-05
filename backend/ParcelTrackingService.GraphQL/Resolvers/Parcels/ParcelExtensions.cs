using Microsoft.EntityFrameworkCore;
using ParcelTrackingService.DAL;
using ParcelTrackingService.DAL.Entities;

namespace ParcelTrackingService.GraphQL.Resolvers.Parcels;

[ExtendObjectType(typeof(Parcel))]
public class ParcelExtensions
{
    [UseFirstOrDefault]
    [UseProjection]
    public IQueryable<ParcelStatus> GetCurrentStatus(
        ParcelTrackingServiceContext context,
        [Parent] Parcel parcel
    )
    {
        return context
            .ParcelStatuses.AsNoTracking()
            .Where(parcelStatus => parcelStatus.ParcelId == parcel.Id)
            .OrderByDescending(parcelStatus => parcelStatus.Date);
    }
}

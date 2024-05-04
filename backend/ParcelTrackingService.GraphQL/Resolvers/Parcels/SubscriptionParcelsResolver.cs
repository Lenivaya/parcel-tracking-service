using Microsoft.EntityFrameworkCore;
using ParcelTrackingService.DAL.Entities;
using ParcelTrackingService.GraphQL.Schema;

namespace ParcelTrackingService.GraphQL.Resolvers.Parcels;

[ExtendObjectType(typeof(Subscription))]
public class SubscriptionParcelsResolver
{
    [Subscribe]
    [Topic($"{nameof(ParcelStatusUpdated)}-{{{nameof(parcelId)}}}")]
    [UseFirstOrDefault]
    [UseProjection]
    public IQueryable<ParcelStatus> ParcelStatusUpdated(
        ParcelTrackingServiceContext context,
        Guid parcelId,
        [EventMessage] Parcel parcel
    )
    {
        return context
            .ParcelStatuses.AsNoTracking()
            .Where(status => status.ParcelId == parcel.Id)
            .OrderByDescending(status => status.Date);
    }
}

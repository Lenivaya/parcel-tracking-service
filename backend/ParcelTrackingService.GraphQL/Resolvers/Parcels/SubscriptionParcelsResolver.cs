using Microsoft.EntityFrameworkCore;
using ParcelTrackingService.DAL;
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
        [EventMessage] Guid messageParcelId
    )
    {
        return context
            .ParcelStatuses.AsNoTracking()
            .Where(status => status.ParcelId == messageParcelId)
            .OrderByDescending(status => status.Date);
    }
}

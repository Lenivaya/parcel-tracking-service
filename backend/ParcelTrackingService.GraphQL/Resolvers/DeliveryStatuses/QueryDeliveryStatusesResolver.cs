using Microsoft.EntityFrameworkCore;
using ParcelTrackingService.DAL.Entities;
using ParcelTrackingService.GraphQL.Schema;

namespace ParcelTrackingService.GraphQL.Resolvers.DeliveryStatuses;

[ExtendObjectType(typeof(Query))]
public class QueryDeliveryStatusesResolver
{
    [UsePaging]
    [UseProjection]
    [UseFiltering]
    [UseSorting]
    public IQueryable<DeliveryStatus> GetDeliveryStatuses(ParcelTrackingServiceContext context)
    {
        return context.DeliveryStatuses.AsNoTracking();
    }
}
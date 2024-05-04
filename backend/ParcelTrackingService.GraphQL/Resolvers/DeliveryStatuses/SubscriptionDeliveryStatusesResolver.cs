using Microsoft.EntityFrameworkCore;
using ParcelTrackingService.DAL.Entities;
using ParcelTrackingService.GraphQL.Schema;

namespace ParcelTrackingService.GraphQL.Resolvers.DeliveryStatuses;

[ExtendObjectType(typeof(Subscription))]
public class SubscriptionDeliveryStatusesResolver
{
    [Subscribe]
    [UseFirstOrDefault]
    [UseProjection]
    public IQueryable<DeliveryStatus> DeliveryStatusCreated(
        ParcelTrackingServiceContext context,
        [EventMessage] Guid deliveryStatusId
    )
    {
        return context
            .DeliveryStatuses.AsNoTracking()
            .Where(status => status.Id == deliveryStatusId);
    }

    [Subscribe]
    [UseFirstOrDefault]
    [UseProjection]
    public IQueryable<DeliveryStatus> DeliveryStatusDeleted(
        ParcelTrackingServiceContext context,
        [EventMessage] Guid deliveryStatusId
    )
    {
        return context
            .DeliveryStatuses.AsNoTracking()
            .Where(status => status.Id == deliveryStatusId);
    }

    [Subscribe]
    [UseFirstOrDefault]
    [UseProjection]
    public IQueryable<DeliveryStatus> DeliveryStatusUpdated(
        ParcelTrackingServiceContext context,
        [EventMessage] Guid deliveryStatusId
    )
    {
        return context
            .DeliveryStatuses.AsNoTracking()
            .Where(status => status.Id == deliveryStatusId);
    }
}
using Microsoft.EntityFrameworkCore;
using ParcelTrackingService.DAL;
using ParcelTrackingService.DAL.Entities;
using ParcelTrackingService.GraphQL.Schema;

namespace ParcelTrackingService.GraphQL.Resolvers.PostOffices;

[ExtendObjectType(typeof(Subscription))]
public class SubscriptionPostOfficesResolver
{
    [Subscribe]
    [UseFirstOrDefault]
    [UseProjection]
    public IQueryable<PostOffice> PostOfficeCreated(
        ParcelTrackingServiceContext context,
        [EventMessage] Guid postOfficeId
    )
    {
        return context.PostOffices.AsNoTracking().Where(p => p.Id == postOfficeId);
    }

    [Subscribe]
    [UseFirstOrDefault]
    [UseProjection]
    public IQueryable<PostOffice> PostOfficeDeleted(
        ParcelTrackingServiceContext context,
        [EventMessage] Guid postOfficeId
    )
    {
        return context.PostOffices.AsNoTracking().Where(p => p.Id == postOfficeId);
    }

    [Subscribe]
    [Topic($"{nameof(PostOfficeUpdated)}-{{{nameof(postOfficeId)}}}")]
    [UseFirstOrDefault]
    [UseProjection]
    public IQueryable<PostOffice> PostOfficeUpdated(
        ParcelTrackingServiceContext context,
        Guid postOfficeId,
        [EventMessage] Guid officeIdInMessage
    )
    {
        return context.PostOffices.AsNoTracking().Where(p => p.Id == officeIdInMessage);
    }
}

using Microsoft.EntityFrameworkCore;
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
        [EventMessage] PostOffice postOffice
    )
    {
        return context.PostOffices.AsNoTracking().Where(p => p.Id == postOffice.Id);
    }

    [Subscribe]
    [UseFirstOrDefault]
    [UseProjection]
    public IQueryable<PostOffice> PostOfficeDeleted(
        ParcelTrackingServiceContext context,
        [EventMessage] PostOffice postOffice
    )
    {
        return context.PostOffices.AsNoTracking().Where(p => p.Id == postOffice.Id);
    }

    [Subscribe]
    [Topic($"{nameof(PostOfficeUpdated)}-{{{nameof(postOfficeId)}}}")]
    [UseFirstOrDefault]
    [UseProjection]
    public IQueryable<PostOffice> PostOfficeUpdated(
        ParcelTrackingServiceContext context,
        Guid postOfficeId,
        [EventMessage] PostOffice office
    )
    {
        return context.PostOffices.AsNoTracking().Where(p => p.Id == postOfficeId);
    }
}

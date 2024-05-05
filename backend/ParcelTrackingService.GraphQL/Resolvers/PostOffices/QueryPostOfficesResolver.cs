using Microsoft.EntityFrameworkCore;
using ParcelTrackingService.DAL;
using ParcelTrackingService.DAL.Entities;
using ParcelTrackingService.GraphQL.Schema;

namespace ParcelTrackingService.GraphQL.Resolvers.PostOffices;

[ExtendObjectType(typeof(Query))]
public class QueryPostOfficesResolver
{
    [UsePaging]
    [UseProjection]
    [UseFiltering]
    [UseSorting]
    public IQueryable<PostOffice> GetPostOffices(ParcelTrackingServiceContext context)
    {
        return context.PostOffices.AsNoTracking();
    }
}

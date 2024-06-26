using Microsoft.EntityFrameworkCore;
using ParcelTrackingService.BLL.Search;
using ParcelTrackingService.BLL.Search.Criteria.PostOffice;
using ParcelTrackingService.BLL.Search.Criteria.PostOffice.Handlers;
using ParcelTrackingService.DAL;
using ParcelTrackingService.DAL.Entities;
using ParcelTrackingService.GraphQL.Schema;

namespace ParcelTrackingService.GraphQL.Resolvers.PostOffices;

[ExtendObjectType(typeof(Query))]
public class QueryPostOfficesResolver
{
    [UseOffsetPaging(MaxPageSize = 50, IncludeTotalCount = true)]
    [UseProjection]
    [UseFiltering]
    [UseSorting]
    public IQueryable<PostOffice> GetPostOfficesOffset(
        ParcelTrackingServiceContext context,
        PostOfficeSearchCriteria? searchCriteria
    )
    {
        return QueryHandler(context, searchCriteria);
    }

    [UsePaging(MaxPageSize = 50, IncludeTotalCount = true)]
    [UseProjection]
    [UseFiltering]
    [UseSorting]
    public IQueryable<PostOffice> GetPostOfficesCursor(
        ParcelTrackingServiceContext context,
        PostOfficeSearchCriteria? searchCriteria
    )
    {
        return QueryHandler(context, searchCriteria);
    }

    private IQueryable<PostOffice> QueryHandler(
        ParcelTrackingServiceContext context,
        PostOfficeSearchCriteria? searchCriteria
    )
    {
        var queryHandlerChain = new SearchCriteriaHandlerChainBuilder<
            ParcelTrackingServiceContext,
            PostOfficeSearchCriteria,
            PostOffice
        >().BuildChain(
            [
                new PostsOfficeSearchCriteriaOverallMatchingQueryHandler(),
                new PostsOfficeSearchCriteriaMatchingAddressQueryHandler(),
                new PostsOfficeSearchCriteriaMatchingCodeQueryHandler()
            ]
        );

        return queryHandlerChain.HandleQuery(context, searchCriteria).AsNoTracking();
    }
}

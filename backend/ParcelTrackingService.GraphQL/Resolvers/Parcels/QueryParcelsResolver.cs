using Microsoft.EntityFrameworkCore;
using ParcelTrackingService.DAL;
using ParcelTrackingService.DAL.Entities;
using ParcelTrackingService.GraphQL.Schema;
using ParcelTrackingService.WebCommon.Search;
using ParcelTrackingService.WebCommon.Search.Criteria.Parcel;
using ParcelTrackingService.WebCommon.Search.Criteria.Parcel.Handlers;

namespace ParcelTrackingService.GraphQL.Resolvers.Parcels;

[ExtendObjectType(typeof(Query))]
public class QueryParcelsResolver
{
    [UseOffsetPaging(MaxPageSize = 50, IncludeTotalCount = true)]
    [UseProjection]
    [UseFiltering]
    [UseSorting]
    public IQueryable<Parcel> GetParcelsOffset(
        ParcelTrackingServiceContext context,
        ParcelSearchCriteria? searchCriteria
    )
    {
        return QueryHandler(context, searchCriteria);
    }

    [UsePaging(MaxPageSize = 50, IncludeTotalCount = true)]
    [UseProjection]
    [UseFiltering]
    [UseSorting]
    public IQueryable<Parcel> GetParcelsCursor(
        ParcelTrackingServiceContext context,
        ParcelSearchCriteria? searchCriteria
    )
    {
        return QueryHandler(context, searchCriteria);
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

    private IQueryable<Parcel> QueryHandler(
        ParcelTrackingServiceContext context,
        ParcelSearchCriteria? searchCriteria
    )
    {
        var queryHandlerChain = new SearchCriteriaHandlerChainBuilder().BuildChain(
            [
                new ParcelSearchCriteriaOverallMatchingQueryHandler(),
                new ParcelSearchCriteriaDateRangeQueryHandler(),
                new ParcelSearchCriteriaCurrentStatusHandler(),
                new ParcelSearchCriteriaContentPriceHandler(),
                new ParcelSearchCriteriaPriceToPayHandler()
            ]
        );

        return queryHandlerChain.HandleQuery(context, searchCriteria).AsNoTracking();
    }
}
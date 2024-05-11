using Microsoft.EntityFrameworkCore;
using ParcelTrackingService.DAL;

namespace ParcelTrackingService.BLL.Search.Criteria.Parcel.Handlers;

public class ParcelSearchCriteriaContentPriceHandler
    : SearchCriteriaQueryHandler<
        ParcelTrackingServiceContext,
        ParcelSearchCriteria,
        DAL.Entities.Parcel
    >
{
    public override IQueryable<DAL.Entities.Parcel> HandleQuery(
        ParcelTrackingServiceContext context,
        ParcelSearchCriteria? searchCriteria,
        IQueryable<DAL.Entities.Parcel>? query = null
    )
    {
        query ??= context.Parcels.AsQueryable();

        if (searchCriteria == null)
            return Next?.HandleQuery(context, searchCriteria, query) ?? query;

        if (searchCriteria.MinContentPrice is decimal minPrice)
            query = query
                .Include(p => p.ParcelInfo)
                .Where(p => p.ParcelInfo.ParcelContentPrice >= minPrice);

        if (searchCriteria.MaxContentPrice is decimal maxPrice)
            query = query
                .Include(p => p.ParcelInfo)
                .Where(p => p.ParcelInfo.ParcelContentPrice <= maxPrice);

        return Next?.HandleQuery(context, searchCriteria, query) ?? query;
    }
}

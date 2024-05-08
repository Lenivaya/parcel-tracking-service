using Microsoft.EntityFrameworkCore;
using ParcelTrackingService.DAL;

namespace ParcelTrackingService.WebCommon.Search.Criteria.Parcel.Handlers;

public class ParcelSearchCriteriaPriceToPayHandler
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
            return query;

        if (searchCriteria.MinPriceToPay is decimal minPrice)
            query = query
                .Include(p => p.ParcelInfo)
                .Where(p => p.ParcelInfo.PriceToPay >= minPrice);

        if (searchCriteria.MaxPriceToPay is decimal maxPrice)
            query = query
                .Include(p => p.ParcelInfo)
                .Where(p => p.ParcelInfo.PriceToPay <= maxPrice);

        return Next?.HandleQuery(context, searchCriteria, query) ?? query;
    }
}

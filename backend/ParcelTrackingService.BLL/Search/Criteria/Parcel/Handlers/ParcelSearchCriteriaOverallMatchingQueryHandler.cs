using Microsoft.EntityFrameworkCore;
using ParcelTrackingService.DAL;

namespace ParcelTrackingService.WebCommon.Search.Criteria.Parcel.Handlers;

public class ParcelSearchCriteriaOverallMatchingQueryHandler
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

        if (searchCriteria.Matching is string matching)
        {
            var patterns = matching.Split(' ').Select(word => $"%{word}%").ToArray();

            query = query
                .Include(p => p.ParcelInfo)
                .Include(p => p.ParcelStatusHistory)
                .Where(p =>
                    patterns.All(word =>
                        EF.Functions.ILike(p.ParcelInfo.Description, word)
                        || EF.Functions.ILike(p.ParcelInfo.DeliveryDestinationAddress, word)
                        || EF.Functions.ILike(p.ParcelInfo.DeliverySourceAddress, word)
                        || p.ParcelStatusHistory.Any(parcelStatus =>
                            EF.Functions.ILike(parcelStatus.StatusDescription, word)
                        )
                    )
                );
        }

        return Next?.HandleQuery(context, searchCriteria, query) ?? query;
    }
}

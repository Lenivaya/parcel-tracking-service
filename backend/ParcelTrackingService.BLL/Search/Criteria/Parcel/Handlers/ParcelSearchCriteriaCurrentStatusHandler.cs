using Microsoft.EntityFrameworkCore;
using ParcelTrackingService.DAL;

namespace ParcelTrackingService.WebCommon.Search.Criteria.Parcel.Handlers;

public class ParcelSearchCriteriaCurrentStatusHandler
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

        if (searchCriteria.CurrentStatusMatching is string currentStatusMatching)
        {
            var patterns = currentStatusMatching.Split(' ').Select(word => $"%{word}%").ToArray();

            query = query
                .Include(p => p.ParcelInfo)
                .Include(p => p.ParcelStatusHistory)
                .Where(p =>
                    p.ParcelStatusHistory.OrderByDescending(status => status.Date)
                        .Take(1)
                        .Any(parcelStatus =>
                            patterns.All(word =>
                                EF.Functions.ILike(parcelStatus.StatusDescription, word)
                            )
                        )
                );
        }

        return Next?.HandleQuery(context, searchCriteria, query) ?? query;
    }
}
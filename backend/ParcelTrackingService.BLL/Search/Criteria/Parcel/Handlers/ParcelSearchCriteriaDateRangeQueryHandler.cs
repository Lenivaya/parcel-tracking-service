using Microsoft.EntityFrameworkCore;
using ParcelTrackingService.DAL;

namespace ParcelTrackingService.BLL.Search.Criteria.Parcel.Handlers;

public class ParcelSearchCriteriaDateRangeQueryHandler
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

        if (searchCriteria.MinDate is DateTime minDate)
        {
            minDate = minDate.ToUniversalTime();
            query = query
                .Include(parcel => parcel.ParcelInfo)
                .Include(parcel => parcel.ParcelStatusHistory)
                .Where(parcel =>
                    parcel.ParcelInfo.UpdatedAt >= minDate
                    || parcel.ParcelStatusHistory.Any(status => status.Date >= minDate)
                    || parcel.UpdatedAt >= minDate
                );
        }

        if (searchCriteria.MaxDate is DateTime maxDate)
        {
            maxDate = maxDate.ToUniversalTime();
            query = query
                .Include(parcel => parcel.ParcelInfo)
                .Include(parcel => parcel.ParcelStatusHistory)
                .Where(parcel =>
                    parcel.ParcelInfo.UpdatedAt <= maxDate
                    || parcel.ParcelStatusHistory.Any(status => status.Date <= maxDate)
                    || parcel.UpdatedAt <= maxDate
                );
        }

        return Next?.HandleQuery(context, searchCriteria, query) ?? query;
    }
}

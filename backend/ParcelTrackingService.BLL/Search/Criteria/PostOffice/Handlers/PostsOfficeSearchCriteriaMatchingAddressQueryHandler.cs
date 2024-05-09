using Microsoft.EntityFrameworkCore;
using ParcelTrackingService.DAL;

namespace ParcelTrackingService.WebCommon.Search.Criteria.PostOffice.Handlers;

public class PostsOfficeSearchCriteriaMatchingAddressQueryHandler
    : SearchCriteriaQueryHandler<
        ParcelTrackingServiceContext,
        PostOfficeSearchCriteria,
        DAL.Entities.PostOffice
    >
{
    public override IQueryable<DAL.Entities.PostOffice> HandleQuery(
        ParcelTrackingServiceContext context,
        PostOfficeSearchCriteria? searchCriteria,
        IQueryable<DAL.Entities.PostOffice>? query = null
    )
    {
        query ??= context.PostOffices.AsQueryable();

        if (searchCriteria == null)
            return query;

        if (searchCriteria.MatchingAddress is string matchingAddress)
        {
            var patterns = matchingAddress.Split(' ').Select(word => $"%{word}%").ToArray();

            query = query.Where(p => patterns.All(word => EF.Functions.ILike(p.Address, word)));
        }

        return Next?.HandleQuery(context, searchCriteria, query) ?? query;
    }
}

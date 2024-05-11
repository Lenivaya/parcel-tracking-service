using Microsoft.EntityFrameworkCore;
using ParcelTrackingService.DAL;

namespace ParcelTrackingService.BLL.Search.Criteria.PostOffice.Handlers;

public class PostsOfficeSearchCriteriaOverallMatchingQueryHandler
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
            return Next?.HandleQuery(context, searchCriteria, query) ?? query;

        if (searchCriteria.Matching is string matching)
        {
            var patterns = matching.Split(' ').Select(word => $"%{word}%").ToArray();

            query = query.Where(p =>
                patterns.All(word =>
                    EF.Functions.ILike(p.Code, word) || EF.Functions.ILike(p.Address, word)
                )
            );
        }

        return Next?.HandleQuery(context, searchCriteria, query) ?? query;
    }
}

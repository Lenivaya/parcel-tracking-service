using Microsoft.EntityFrameworkCore;
using ParcelTrackingService.DAL;

namespace ParcelTrackingService.BLL.Search.Criteria.PostOffice.Handlers;

public class PostsOfficeSearchCriteriaMatchingCodeQueryHandler
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

        if (searchCriteria.MatchingCode is string matchingCode)
        {
            var patterns = matchingCode.Split(' ').Select(word => $"%{word}%").ToArray();
            query = query.Where(p => patterns.All(word => EF.Functions.ILike(p.Code, word)));
        }

        return Next?.HandleQuery(context, searchCriteria, query) ?? query;
    }
}

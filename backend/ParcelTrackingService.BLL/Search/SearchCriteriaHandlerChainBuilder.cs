using ParcelTrackingService.DAL;
using ParcelTrackingService.DAL.Entities;
using ParcelTrackingService.WebCommon.Contracts;
using ParcelTrackingService.WebCommon.Search.Criteria.Parcel;

namespace ParcelTrackingService.WebCommon.Search;

public class SearchCriteriaHandlerChainBuilder
    : IChainable<
        ISearchCriteriaQueryHandler<ParcelTrackingServiceContext, ParcelSearchCriteria, Parcel>
    >
{
    public ISearchCriteriaQueryHandler<
        ParcelTrackingServiceContext,
        ParcelSearchCriteria,
        Parcel
    >? Next { get; set; }

    public ISearchCriteriaQueryHandler<
        ParcelTrackingServiceContext,
        ParcelSearchCriteria,
        Parcel
    > SetNextHandler(
        ISearchCriteriaQueryHandler<ParcelTrackingServiceContext, ParcelSearchCriteria, Parcel> next
    )
    {
        Next = next;
        return Next;
    }

    public ISearchCriteriaQueryHandler<
        ParcelTrackingServiceContext,
        ParcelSearchCriteria,
        Parcel
    > addNextHandler(
        ISearchCriteriaQueryHandler<ParcelTrackingServiceContext, ParcelSearchCriteria, Parcel> next
    )
    {
        Next = next;
        return Next;
    }

    public ISearchCriteriaQueryHandler<
        ParcelTrackingServiceContext,
        ParcelSearchCriteria,
        Parcel
    > BuildChain(
        ISearchCriteriaQueryHandler<
            ParcelTrackingServiceContext,
            ParcelSearchCriteria,
            Parcel
        >[] handlers
    )
    {
        if (handlers.Length == 0)
            return Next ?? throw new InvalidOperationException("No handlers provided");

        Next = handlers[0];

        for (var i = 0; i < handlers.Length - 1; i++)
            handlers[i].SetNextHandler(handlers[i + 1]);

        return handlers.First();
    }
}

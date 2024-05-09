namespace ParcelTrackingService.WebCommon.Search.Criteria.PostOffice;

public record PostOfficeSearchCriteria(
    string? Matching,
    string? MatchingCode,
    string? MatchingAddress
);

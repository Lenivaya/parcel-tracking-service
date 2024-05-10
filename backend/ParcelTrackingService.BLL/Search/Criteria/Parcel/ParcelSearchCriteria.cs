namespace ParcelTrackingService.BLL.Search.Criteria.Parcel;

public record ParcelSearchCriteria(
    string? Matching,
    string? CurrentStatusMatching,
    DateTime? MaxDate,
    DateTime? MinDate,
    decimal? MinContentPrice,
    decimal? MaxContentPrice,
    decimal? MinPriceToPay,
    decimal? MaxPriceToPay
);

namespace ParcelTrackingService.WebCommon.DTO;

public record ParcelCreateDto(
    ParcelInfoDto ParcelInfo,
    ParcelStatusDto[]? ParcelStatusHistory = default!
);

public record ParcelPatchDto(
    ParcelInfoDto? ParcelInfo,
    ParcelStatusDto[]? ParcelStatusHistory = default!
);

public record ParcelInfoDto(
    string DeliveryDestinationAddress,
    string Description,
    decimal PriceToPay,
    decimal ParcelContentPrice
);

public record ParcelStatusDto(string StatusDescription, Guid? DeliveryStatusId, DateTime? Date);
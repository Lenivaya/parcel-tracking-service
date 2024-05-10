namespace ParcelTrackingService.BLL.DTO;

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
    string DeliverySourceAddress,
    string Description,
    decimal PriceToPay,
    decimal ParcelContentPrice
);

public record ParcelStatusDto(string StatusDescription, Guid? DeliveryStatusId, DateTime? Date);

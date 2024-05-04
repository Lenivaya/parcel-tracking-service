namespace ParcelTrackingService.WebCommon.DTO;

public record DeliveryStatusCreateDto(string StatusName);

public record DeliveryStatusPatchDto(string? StatusName);
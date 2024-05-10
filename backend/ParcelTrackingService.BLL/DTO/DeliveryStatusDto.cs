using ParcelTrackingService.DAL.Entities;

namespace ParcelTrackingService.BLL.DTO;

public record DeliveryStatusCreateDto(string StatusName, GeneralDeliveryState GeneralDeliveryState);

public record DeliveryStatusPatchDto(
    string? StatusName,
    GeneralDeliveryState? GeneralDeliveryState
);

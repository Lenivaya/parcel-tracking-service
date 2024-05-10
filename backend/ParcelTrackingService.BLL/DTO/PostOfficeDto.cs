namespace ParcelTrackingService.BLL.DTO;

public record PostOfficeCreateDto(string Address, string Code);

public record PostOfficePatchDto(string? Address, string? Code);

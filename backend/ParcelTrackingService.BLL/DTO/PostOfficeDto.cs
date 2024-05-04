namespace ParcelTrackingService.WebCommon.DTO;

public record PostOfficeCreateDto(string Address, string Code);

public record PostOfficePatchDto(string? Address, string? Code);

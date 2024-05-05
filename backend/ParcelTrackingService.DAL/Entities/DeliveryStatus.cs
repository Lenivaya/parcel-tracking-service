using System.ComponentModel.DataAnnotations.Schema;

namespace ParcelTrackingService.DAL.Entities;

public enum GeneralDeliveryState
{
    Sent,
    InTransit,
    Delivered,
    Returned
}

[Table("delivery_statuses")]
public class DeliveryStatus : BaseEntity
{
    public string StatusName { get; init; } = string.Empty;
    public GeneralDeliveryState GeneralDeliveryState { get; init; }
}
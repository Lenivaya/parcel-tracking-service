using System.ComponentModel.DataAnnotations.Schema;

namespace ParcelTrackingService.DAL.Entities;

[Table("delivery_statuses")]
public class DeliveryStatus : BaseEntity
{
    public string StatusName { get; init; } = string.Empty;
}

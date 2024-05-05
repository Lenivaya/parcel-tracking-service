using System.ComponentModel.DataAnnotations.Schema;

namespace ParcelTrackingService.DAL.Entities;

[Table("parcel_infos")]
public class ParcelInfo : BaseEntity
{
    public string DeliveryDestinationAddress { get; set; } = string.Empty;

    public string DeliverySourceAddress { get; set; } = string.Empty;

    public string Description { get; set; } = string.Empty;

    public decimal PriceToPay { get; set; }

    public decimal ParcelContentPrice { get; set; }

    [ForeignKey(nameof(Sender))] public Guid? SenderId { get; init; }

    public virtual User? Sender { get; init; } = default!;
}
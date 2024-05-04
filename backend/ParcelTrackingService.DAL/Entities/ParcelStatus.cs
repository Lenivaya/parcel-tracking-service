using System.ComponentModel.DataAnnotations.Schema;

namespace ParcelTrackingService.DAL.Entities;

[Table("parcel_statuses")]
public sealed class ParcelStatus : BaseEntity
{
    public string StatusDescription { get; init; } = string.Empty;

    public DateTime Date { get; init; } = DateTime.UtcNow;

    [ForeignKey(nameof(Parcel))]
    public Guid ParcelId { get; init; }

    public Parcel Parcel { get; init; } = default!;

    [ForeignKey(nameof(DeliveryStatus))]
    public Guid? DeliveryStatusId { get; init; }

    public DeliveryStatus? DeliveryStatus { get; init; }
}

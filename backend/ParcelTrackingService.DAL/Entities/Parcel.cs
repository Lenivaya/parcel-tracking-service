using System.ComponentModel.DataAnnotations.Schema;

namespace ParcelTrackingService.DAL.Entities;

[Table("parcels")]
public class Parcel : BaseEntity
{
    [ForeignKey(nameof(ParcelInfo))] public Guid ParcelInfoId { get; init; }

    public virtual ParcelInfo ParcelInfo { get; init; } = default!;

    [InverseProperty(nameof(ParcelStatus.Parcel))]
    public ICollection<ParcelStatus> ParcelStatusHistory { get; set; } = [];
}
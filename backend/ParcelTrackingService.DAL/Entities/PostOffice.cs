using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace ParcelTrackingService.DAL.Entities;

[Table("post_offices")]
[Index(nameof(Code), Name = "post_offices_code_key", IsUnique = true)]
public class PostOffice : BaseEntity
{
    public string Address { get; init; } = string.Empty;

    public string Code { get; init; } = string.Empty;
}

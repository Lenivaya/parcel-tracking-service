using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace ParcelTrackingService.DAL.Entities;

[Table("users")]
[Index(nameof(Email), Name = "users_email_key", IsUnique = true)]
[Index(nameof(Username), Name = "users_username_key", IsUnique = true)]
public class User : BaseEntity
{
    [Column("email"), StringLength(100)]
    public string Email { get; set; } = null!;

    public string Username { get; set; } = null!;

    [Column("password_hash")]
    [StringLength(60)]
    public string PasswordHash { get; set; } = null!;
}

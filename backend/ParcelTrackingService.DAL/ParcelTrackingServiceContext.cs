using Microsoft.EntityFrameworkCore;
using ParcelTrackingService.DAL.Entities;

namespace ParcelTrackingService.DAL;

public partial class ParcelTrackingServiceContext : DbContext
{
    public ParcelTrackingServiceContext()
    {
        ChangeTracker.LazyLoadingEnabled = false;
    }

    public ParcelTrackingServiceContext(DbContextOptions<ParcelTrackingServiceContext> options)
        : base(options)
    {
        ChangeTracker.LazyLoadingEnabled = false;
    }

    public virtual DbSet<PostOffice> PostOffices { get; set; } = default!;
    public virtual DbSet<DeliveryStatus> DeliveryStatuses { get; set; } = default!;
    public virtual DbSet<Parcel> Parcels { get; set; } = default!;
    public virtual DbSet<ParcelInfo> ParcelInfos { get; set; } = default!;
    public virtual DbSet<ParcelStatus> ParcelStatuses { get; set; } = default!;

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder
            .Entity<BaseEntity>()
            .Property(e => e.Id)
            .HasDefaultValueSql("gen_random_uuid()");

        modelBuilder.Entity<BaseEntity>().Property(e => e.CreatedAt).HasDefaultValueSql("now()");
        modelBuilder.Entity<BaseEntity>().Property(e => e.UpdatedAt).HasDefaultValueSql("now()");

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);

    public override int SaveChanges()
    {
        var entries = ChangeTracker.Entries().Where(e => e.State is EntityState.Modified);

        foreach (var entry in entries)
            if (entry.Entity is BaseEntity entity)
                entity.UpdatedAt = DateTime.Now;

        return base.SaveChanges();
    }
}

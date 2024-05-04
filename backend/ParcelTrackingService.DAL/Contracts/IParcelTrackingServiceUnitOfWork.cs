using ParcelTrackingService.DAL.Entities;

namespace ParcelTrackingService.DAL.Contracts;

public interface IParcelTrackingServiceUnitOfWork : IUnitOfWork
{
    public IEntityRepository<PostOffice, Guid> PostOfficesRepository { get; }
    public IEntityRepository<DeliveryStatus, Guid> DeliveryStatusesRepository { get; }
    public IEntityRepository<Parcel, Guid> ParcelsRepository { get; }
    public IEntityRepository<ParcelInfo, Guid> ParcelInfosRepository { get; }
    public IEntityRepository<ParcelStatus, Guid> ParcelStatusesRepository { get; }
}

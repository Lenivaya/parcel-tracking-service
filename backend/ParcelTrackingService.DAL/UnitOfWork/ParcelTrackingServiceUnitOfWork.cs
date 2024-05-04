using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using ParcelTrackingService.DAL.Contracts;
using ParcelTrackingService.DAL.Entities;
using ParcelTrackingService.DAL.Repositories;

namespace ParcelTrackingService.DAL.UnitOfWork;

public class ParcelTrackingServiceUnitOfWork
    : UnitOfWork<ParcelTrackingServiceContext>,
        IParcelTrackingServiceUnitOfWork
{
    public ParcelTrackingServiceUnitOfWork(
        IDbContextFactory<ParcelTrackingServiceContext> context,
        ILogger<ParcelTrackingServiceUnitOfWork> logger
    )
        : base(context, logger)
    {
        InitializeRepositories(Context, Logger);
    }

    public ParcelTrackingServiceUnitOfWork(
        ParcelTrackingServiceContext context,
        ILogger<ParcelTrackingServiceUnitOfWork> logger
    )
        : base(context, logger)
    {
        InitializeRepositories(Context, Logger);
    }

    public IEntityRepository<PostOffice, Guid> PostOfficesRepository { get; private set; }
    public IEntityRepository<DeliveryStatus, Guid> DeliveryStatusesRepository { get; private set; }
    public IEntityRepository<Parcel, Guid> ParcelsRepository { get; private set; }
    public IEntityRepository<ParcelInfo, Guid> ParcelInfosRepository { get; private set; }
    public IEntityRepository<ParcelStatus, Guid> ParcelStatusesRepository { get; private set; }

    private void InitializeRepositories(ParcelTrackingServiceContext context, ILogger logger)
    {
        PostOfficesRepository = new GuidGenericRepository<PostOffice>(context, logger);
        DeliveryStatusesRepository = new GuidGenericRepository<DeliveryStatus>(context, logger);
        ParcelsRepository = new GuidGenericRepository<Parcel>(context, logger);
        ParcelInfosRepository = new GuidGenericRepository<ParcelInfo>(context, logger);
        ParcelStatusesRepository = new GuidGenericRepository<ParcelStatus>(context, logger);
    }
}
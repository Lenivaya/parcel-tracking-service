using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using ParcelTrackingService.DAL.Contracts;
using ParcelTrackingService.DAL.Entities;

namespace ParcelTrackingService.DAL.Repositories;

public class GuidGenericRepository<TEntity> : GenericRepository<TEntity, Guid>
    where TEntity : class
{
    public GuidGenericRepository(ParcelTrackingServiceContext context, ILogger logger)
        : base(context, logger) { }

    public GuidGenericRepository(
        IDbContextFactory<ParcelTrackingServiceContext> contextFactory,
        ILogger logger
    )
        : base(contextFactory, logger) { }
}

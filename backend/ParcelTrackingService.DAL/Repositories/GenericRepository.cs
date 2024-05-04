using System.Linq.Expressions;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using ParcelTrackingService.DAL.Contracts;
using ParcelTrackingService.DAL.Entities;

namespace ParcelTrackingService.DAL.Repositories;

public class GenericRepository<TEntity, TPrimaryKey>
    : IEntityRepository<TEntity, TPrimaryKey>,
        IAsyncDisposable
    where TEntity : class
{
    public GenericRepository(ParcelTrackingServiceContext context, ILogger logger)
    {
        Context = context;
        Logger = logger;
        DbSet = Context.Set<TEntity>();
    }

    public GenericRepository(
        IDbContextFactory<ParcelTrackingServiceContext> contextFactory,
        ILogger logger
    )
    {
        Context = contextFactory.CreateDbContext();
        Logger = logger;
        DbSet = Context.Set<TEntity>();
    }

    internal ParcelTrackingServiceContext Context { get; }
    internal DbSet<TEntity> DbSet { get; }
    internal ILogger Logger { get; }

    public virtual IEnumerable<string> DefaultIncludes { get; set; } = [];

    public async ValueTask DisposeAsync()
    {
        await Context.DisposeAsync();
        GC.SuppressFinalize(this);
    }

    public virtual async Task<IEnumerable<TEntity>> Get(
        List<Expression<Func<TEntity, bool>>>? filters = null,
        Func<IQueryable<TEntity>, IOrderedQueryable<TEntity>>? orderBy = null,
        IEnumerable<string>? includeProperties = null
    )
    {
        var query = DbSet.AsNoTracking();

        if (filters != null)
            query = filters.Aggregate(query, (current, filter) => current.Where(filter));

        if (includeProperties != null)
            query = includeProperties.Aggregate(
                query,
                (current, includeProperty) => current.Include(includeProperty)
            );

        if (orderBy != null)
            return await orderBy(query).ToListAsync();

        return await query.ToListAsync();
    }

    public virtual async Task<IEnumerable<TEntity>> GetAll()
    {
        var query = StartQueryWithDefaultIncludes();
        return await query.AsNoTracking().ToListAsync();
    }

    public virtual async Task<TEntity?> GetById(TPrimaryKey id)
    {
        try
        {
            return await DbSet.FindAsync(id);
        }
        catch (Exception e)
        {
            Logger.LogError(e, "Error getting entity with id {Id}", id);
            return null;
        }
    }

    public virtual async Task<bool> Insert(TEntity entity)
    {
        try
        {
            await DbSet.AddAsync(entity);
            return true;
        }
        catch (Exception e)
        {
            Logger.LogError(e, "Error adding entity");
            return false;
        }
    }

    public virtual async Task<bool> Delete(TPrimaryKey id)
    {
        try
        {
            var entityToDelete = await GetById(id);
            if (entityToDelete == null)
                return false;

            Delete(entityToDelete);
            return true;
        }
        catch (Exception e)
        {
            Logger.LogError(e, "Error deleting entity with id {Id}", id);
            return false;
        }
    }

    public virtual async Task<(bool, TEntity? entityToDelete)> DeleteWithEntityReturn(
        TPrimaryKey id
    )
    {
        try
        {
            var entityToDelete = await GetById(id);
            if (entityToDelete == null)
                return (false, entityToDelete);

            Delete(entityToDelete);
            return (true, entityToDelete);
        }
        catch (Exception e)
        {
            Logger.LogError(e, "Error deleting entity with id {Id}", id);
            return (false, null);
        }
    }

    public IQueryable<TEntity> StartQuery()
    {
        return DbSet;
    }

    public virtual void Delete(TEntity entityToDelete)
    {
        if (Context.Entry(entityToDelete).State == EntityState.Detached)
            DbSet.Attach(entityToDelete);
        DbSet.Remove(entityToDelete);
    }

    public virtual void Update(TEntity entityToUpdate)
    {
        DbSet.Attach(entityToUpdate);
        Context.Entry(entityToUpdate).State = EntityState.Modified;
    }

    public IQueryable<TEntity> StartQueryWithDefaultIncludes()
    {
        var query = DbSet.AsQueryable();

        return DefaultIncludes.Aggregate(
            query,
            (current, includeProperty) => current.Include(includeProperty)
        );
    }
}

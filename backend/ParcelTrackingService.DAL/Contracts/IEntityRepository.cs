using System.Linq.Expressions;

namespace ParcelTrackingService.DAL.Contracts;

public interface IEntityRepository<TEntity, in TPrimaryKey>
    where TEntity : class
{
    Task<IEnumerable<TEntity>> Get(
        List<Expression<Func<TEntity, bool>>>? filters = null,
        Func<IQueryable<TEntity>, IOrderedQueryable<TEntity>>? orderBy = null,
        IEnumerable<string>? includeProperties = null
    );

    IQueryable<TEntity> StartQuery();
    IQueryable<TEntity> StartQueryWithDefaultIncludes();

    Task<IEnumerable<TEntity>> GetAll();
    Task<TEntity?> GetById(TPrimaryKey id);
    Task<bool> Insert(TEntity entity);
    Task<bool> Delete(TPrimaryKey id);
    Task<(bool, TEntity? entityToDelete)> DeleteWithEntityReturn(TPrimaryKey id);

    void Delete(TEntity entityToDelete);
    void Update(TEntity entityToUpdate);
}

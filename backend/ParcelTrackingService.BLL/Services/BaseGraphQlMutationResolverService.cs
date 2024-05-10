using HotChocolate;
using MapsterMapper;
using Microsoft.EntityFrameworkCore;
using Npgsql;
using ParcelTrackingService.BLL.Exceptions;
using ParcelTrackingService.DAL.Contracts;

namespace ParcelTrackingService.BLL.Services;

public delegate IEntityRepository<TEntity, TPrimaryKey> GetRepositoryFunc<TEntity, in TPrimaryKey>(
    IParcelTrackingServiceUnitOfWork unitOfWork
)
    where TEntity : class;

public class BaseGraphQlMutationResolverService<TEntity, TPrimaryKey, TCreateDto, TUpdateDto>(
    GetRepositoryFunc<TEntity, TPrimaryKey> getRepository
)
    where TEntity : class
{
    public async Task<TEntity?> AddEntity(
        [Service] IParcelTrackingServiceUnitOfWork unitOfWork,
        [Service] IMapper mapper,
        TCreateDto createDto,
        Action<TEntity>? onSuccess = null
    )
    {
        try
        {
            var repo = getRepository(unitOfWork);
            var entity = mapper.Map<TEntity>(createDto!);
            var success = await repo.Insert(entity);
            if (!success)
                return null;

            await unitOfWork.SaveChanges();
            onSuccess?.Invoke(entity);
            return entity;
        }
        catch (DbUpdateException e) when (e.InnerException is PostgresException postgresException)
        {
            throw new ParcelTrackingServiceException(postgresException.MessageText);
        }
        catch (PostgresException e)
        {
            throw new ParcelTrackingServiceException(e.Message);
        }
    }

    public async Task<TEntity?> DeleteEntity(
        [Service] IParcelTrackingServiceUnitOfWork unitOfWork,
        TPrimaryKey id,
        Action<TEntity>? onSuccess = null
    )
    {
        var repo = getRepository(unitOfWork);
        var (isDeleted, deletedEntity) = await repo.DeleteWithEntityReturn(id);
        if (!isDeleted || deletedEntity is null)
            return null;

        await unitOfWork.SaveChanges();
        onSuccess?.Invoke(deletedEntity);
        return deletedEntity;
    }

    public async Task<TEntity?> UpdateEntity(
        [Service] IParcelTrackingServiceUnitOfWork unitOfWork,
        [Service] IMapper mapper,
        TPrimaryKey id,
        TUpdateDto updateDto,
        Action<TEntity>? onSuccess = null
    )
    {
        var repo = getRepository(unitOfWork);
        var entityToUpdate = await repo.GetById(id);

        if (entityToUpdate == null)
            return null;

        var updatedEntity = mapper.Map(updateDto, entityToUpdate);

        repo.Update(updatedEntity);
        await unitOfWork.SaveChanges();
        onSuccess?.Invoke(updatedEntity);

        return updatedEntity;
    }
}

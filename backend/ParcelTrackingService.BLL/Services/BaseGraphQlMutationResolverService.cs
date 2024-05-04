using HotChocolate;
using MapsterMapper;
using Microsoft.EntityFrameworkCore;
using Npgsql;
using ParcelTrackingService.DAL.Contracts;
using ParcelTrackingService.WebCommon.Exceptions;

namespace ParcelTrackingService.WebCommon.Services;

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
        TCreateDto createDto
    )
    {
        try
        {
            var repo = getRepository(unitOfWork);
            var entity = mapper.Map<TEntity>(createDto!);
            var success = await repo.Insert(entity);

            await unitOfWork.SaveChanges();
            return success ? entity : null;
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
        TPrimaryKey id
    )
    {
        var repo = getRepository(unitOfWork);
        var (isDeleted, deletedEntity) = await repo.DeleteWithEntityReturn(id);

        await unitOfWork.SaveChanges();
        return isDeleted ? deletedEntity : null;
    }

    public async Task<TEntity?> UpdateEntity(
        [Service] IParcelTrackingServiceUnitOfWork unitOfWork,
        [Service] IMapper mapper,
        TPrimaryKey id,
        TUpdateDto updateDto
    )
    {
        var repo = getRepository(unitOfWork);
        var entityToUpdate = await repo.GetById(id);

        if (entityToUpdate == null)
            return null;

        var updatedEntity = mapper.Map(updateDto, entityToUpdate);

        repo.Update(updatedEntity);
        await unitOfWork.SaveChanges();

        return updatedEntity;
    }
}
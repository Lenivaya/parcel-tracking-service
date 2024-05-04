using MapsterMapper;
using ParcelTrackingService.DAL.Entities;
using ParcelTrackingService.DAL.UnitOfWork;
using ParcelTrackingService.GraphQL.Schema;
using ParcelTrackingService.WebCommon.DTO;
using ParcelTrackingService.WebCommon.Exceptions;
using ParcelTrackingService.WebCommon.Services;

namespace ParcelTrackingService.GraphQL.Resolvers.PostOffices;

[ExtendObjectType(typeof(Mutation))]
public class MutationPostOfficesResolver
{
    private BaseGraphQlMutationResolverService<
        PostOffice,
        Guid,
        PostOfficeCreateDto,
        PostOfficePatchDto
    > GraphQlMutationResolverService { get; } = new(unitOfWork => unitOfWork.PostOfficesRepository);

    [Error(typeof(ParcelTrackingServiceException))]
    public Task<PostOffice?> AddPostOffice(
        ParcelTrackingServiceUnitOfWork unitOfWork,
        [Service] IMapper mapper,
        PostOfficeCreateDto createDto
    )
    {
        return GraphQlMutationResolverService.AddEntity(unitOfWork, mapper, createDto);
    }

    public Task<PostOffice?> DeletePostOfficeById(
        ParcelTrackingServiceUnitOfWork unitOfWork,
        Guid officeId
    )
    {
        return GraphQlMutationResolverService.DeleteEntity(unitOfWork, officeId);
    }

    public Task<PostOffice?> UpdatePostOffice(
        ParcelTrackingServiceUnitOfWork unitOfWork,
        [Service] IMapper mapper,
        Guid officeId,
        PostOfficePatchDto updateDto
    )
    {
        return GraphQlMutationResolverService.UpdateEntity(unitOfWork, mapper, officeId, updateDto);
    }
}

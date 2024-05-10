using Mapster;
using MapsterMapper;
using Microsoft.Extensions.DependencyInjection;
using ParcelTrackingService.DAL.Entities;

namespace ParcelTrackingService.BLL.DTO;

public static class MapsterConfig
{
    public static void ConfigureServices(IServiceCollection serviceCollection)
    {
        var typeAdapterConfig = new TypeAdapterConfig();
        Register(typeAdapterConfig);
        serviceCollection.AddSingleton(typeAdapterConfig).AddScoped<IMapper, ServiceMapper>();
    }

    private static void Register(TypeAdapterConfig config)
    {
        config.NewConfig<PostOfficePatchDto, PostOffice>().IgnoreNullValues(true);

        config.NewConfig<DeliveryStatusPatchDto, DeliveryStatus>().IgnoreNullValues(true);

        config.NewConfig<ParcelCreateDto, Parcel>().IgnoreNullValues(true);

        config.NewConfig<ParcelStatusDto, ParcelStatus>().IgnoreNullValues(true);
    }
}

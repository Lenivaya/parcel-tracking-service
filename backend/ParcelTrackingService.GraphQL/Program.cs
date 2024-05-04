using HotChocolate.Language;
using Microsoft.AspNetCore.HttpLogging;
using Microsoft.EntityFrameworkCore;
using Npgsql;
using ParcelTrackingService.DAL.Entities;
using ParcelTrackingService.DAL.UnitOfWork;
using ParcelTrackingService.GraphQL.Resolvers.DeliveryStatuses;
using ParcelTrackingService.GraphQL.Resolvers.Parcels;
using ParcelTrackingService.GraphQL.Resolvers.PostOffices;
using ParcelTrackingService.GraphQL.Schema;
using ParcelTrackingService.WebCommon.DTO;

var builder = WebApplication.CreateSlimBuilder(args);

MapsterConfig.ConfigureServices(builder.Services);

builder
    .Services.AddHttpLogging(options =>
    {
        options.LoggingFields = HttpLoggingFields.Request;
    })
    .AddCors();

builder
    .Services.AddPooledDbContextFactory<ParcelTrackingServiceContext>(options =>
    {
        var dataSourceBuilder = new NpgsqlDataSourceBuilder(
            builder.Configuration.GetConnectionString("DefaultConnection")
        );
        options.UseNpgsql(dataSourceBuilder.Build());
    })
    .AddTransient<ParcelTrackingServiceUnitOfWork>();

builder.Services.AddMemoryCache().AddSha256DocumentHashProvider(HashFormat.Hex);

builder
    .Services.AddGraphQLServer()
    .InitializeOnStartup()
    .RegisterDbContext<ParcelTrackingServiceContext>(DbContextKind.Pooled)
    .RegisterService<ParcelTrackingServiceUnitOfWork>()
    .AddMutationConventions()
    .AddProjections()
    .AddExtendedFiltering()
    .AddSorting()
    .AddQueryType<Query>()
    .AddTypeExtension<QueryPostOfficesResolver>()
    .AddTypeExtension<QueryDeliveryStatusesResolver>()
    .AddTypeExtension<QueryParcelsResolver>()
    .AddMutationType<Mutation>()
    .AddTypeExtension<MutationPostOfficesResolver>()
    .AddTypeExtension<MutationDeliveryStatusesResolver>()
    .AddTypeExtension<MutationParcelsResolver>()
    .AddApolloTracing()
    .UseAutomaticPersistedQueryPipeline()
    .AddInMemoryQueryStorage()
    .ModifyRequestOptions(options => options.IncludeExceptionDetails = true);
;

var app = builder.Build();

app.UseRouting();

if (app.Environment.IsDevelopment())
{
    app.UseHttpLogging();
    app.UseDeveloperExceptionPage();
}

app.UseCors(corsPolicyBuilder =>
    corsPolicyBuilder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader()
);

app.MapGraphQL();
await app.RunWithGraphQLCommandsAsync(args);

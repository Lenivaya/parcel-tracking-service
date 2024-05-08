using Bogus;
using Microsoft.EntityFrameworkCore;
using ParcelTrackingService.DAL.Entities;

namespace ParcelTrackingService.DAL;

public class DatabaseSeeder(IDbContextFactory<ParcelTrackingServiceContext> contextFactory)
{
    private ParcelTrackingServiceContext Context { get; } = contextFactory.CreateDbContext();

    public async Task Seed()
    {
        if (!await Context.DeliveryStatuses.AnyAsync())
            await Context.DeliveryStatuses.AddRangeAsync(DeliveryStatuses);

        if (!await Context.PostOffices.AnyAsync())
            await Context.PostOffices.AddRangeAsync(PostOffices);

        if (!await Context.Parcels.AnyAsync())
            await Context.Parcels.AddRangeAsync(Parcels);

        await Context.SaveChangesAsync();
    }

    public IReadOnlyCollection<PostOffice> PostOffices => GeneratePostOffices(10);

    public IReadOnlyCollection<DeliveryStatus> DeliveryStatuses =>
        new List<DeliveryStatus>
        {
            new()
            {
                Id = Guid.NewGuid(),
                StatusName = "Delivered to office",
                GeneralDeliveryState = GeneralDeliveryState.Delivered
            },
            new()
            {
                Id = Guid.NewGuid(),
                StatusName = "Delivered to home",
                GeneralDeliveryState = GeneralDeliveryState.Delivered
            },
            new()
            {
                Id = Guid.NewGuid(),
                StatusName = "In transit",
                GeneralDeliveryState = GeneralDeliveryState.InTransit
            },
            new()
            {
                Id = Guid.NewGuid(),
                StatusName = "Waiting for the package",
                GeneralDeliveryState = GeneralDeliveryState.Preparing
            },
            new()
            {
                Id = Guid.NewGuid(),
                StatusName = "Preparing for the delivery",
                GeneralDeliveryState = GeneralDeliveryState.Preparing
            },
            new()
            {
                Id = Guid.NewGuid(),
                StatusName = "Sent",
                GeneralDeliveryState = GeneralDeliveryState.Sent
            },
            new()
            {
                Id = Guid.NewGuid(),
                StatusName = "Receiver not found",
                GeneralDeliveryState = GeneralDeliveryState.Returned
            },
            new()
            {
                Id = Guid.NewGuid(),
                StatusName = "Receiver refused to accept the package",
                GeneralDeliveryState = GeneralDeliveryState.Returned
            },
        };

    public IReadOnlyCollection<Parcel> Parcels =>
        new List<Parcel>
        {
            new()
            {
                Id = Guid.NewGuid(),
                ParcelInfo = new ParcelInfo
                {
                    Id = Guid.NewGuid(),
                    Description = "MacBook Pro 2021",
                    ParcelContentPrice = 2000,
                    PriceToPay = 20,
                    DeliverySourceAddress = "Kyiv, Ukraine, 02000, 1, Shevchenka street",
                    DeliveryDestinationAddress = "Lviv, Ukraine, 79000, 1, Shevchenka street",
                },
                ParcelStatusHistory = new List<ParcelStatus>
                {
                    new()
                    {
                        Id = Guid.NewGuid(),
                        StatusDescription = "Parcel is preparing for the delivery",
                        Date = new DateTime(2021, 10, 10).ToUniversalTime(),
                        DeliveryStatus = DeliveryStatuses.First(x =>
                            x.GeneralDeliveryState == GeneralDeliveryState.Preparing
                        ),
                    },
                    new()
                    {
                        Id = Guid.NewGuid(),
                        StatusDescription = "Parcel is sent",
                        Date = new DateTime(2021, 10, 11).ToUniversalTime(),
                        DeliveryStatus = DeliveryStatuses.First(x =>
                            x.GeneralDeliveryState == GeneralDeliveryState.Sent
                        ),
                    },
                    new()
                    {
                        Id = Guid.NewGuid(),
                        StatusDescription = "Parcel is in transit",
                        Date = new DateTime(2021, 10, 12).ToUniversalTime(),
                        DeliveryStatus = DeliveryStatuses.First(x =>
                            x.GeneralDeliveryState == GeneralDeliveryState.InTransit
                        ),
                    },
                    new()
                    {
                        Id = Guid.NewGuid(),
                        StatusDescription = "Parcel is delivered to the office",
                        Date = new DateTime(2021, 10, 13).ToUniversalTime(),
                        DeliveryStatus = DeliveryStatuses.First(x =>
                            x.GeneralDeliveryState == GeneralDeliveryState.Delivered
                        ),
                    },
                },
            },
            new()
            {
                Id = Guid.NewGuid(),
                ParcelInfo = new ParcelInfo
                {
                    Id = Guid.NewGuid(),
                    Description = "iPhone 13 Pro",
                    ParcelContentPrice = 1000,
                    PriceToPay = 10,
                    DeliverySourceAddress = "Kharkiv, Ukraine, 02000, 1, Shevchenka street",
                    DeliveryDestinationAddress =
                        "Dnipropetrovsk, Ukraine, 79000, 1, Lysenko street",
                },
                ParcelStatusHistory = new List<ParcelStatus>
                {
                    new()
                    {
                        Id = Guid.NewGuid(),
                        StatusDescription = "Parcel is preparing for the delivery",
                        Date = new DateTime(2022, 10, 10).ToUniversalTime(),
                        DeliveryStatus = DeliveryStatuses.First(x =>
                            x.GeneralDeliveryState == GeneralDeliveryState.Preparing
                        ),
                    },
                    new()
                    {
                        Id = Guid.NewGuid(),
                        StatusDescription = "Parcel is sent",
                        Date = new DateTime(2022, 10, 11).ToUniversalTime(),
                        DeliveryStatus = DeliveryStatuses.First(x =>
                            x.GeneralDeliveryState == GeneralDeliveryState.Sent
                        ),
                    },
                    new()
                    {
                        Id = Guid.NewGuid(),
                        StatusDescription = "Parcel is in transit",
                        Date = new DateTime(2022, 10, 12).ToUniversalTime(),
                        DeliveryStatus = DeliveryStatuses.First(x =>
                            x.GeneralDeliveryState == GeneralDeliveryState.InTransit
                        ),
                    },
                    new()
                    {
                        Id = Guid.NewGuid(),
                        StatusDescription = "Parcel is delivered to the office",
                        Date = new DateTime(2022, 11, 12).ToUniversalTime(),
                        DeliveryStatus = DeliveryStatuses.First(x =>
                            x.GeneralDeliveryState == GeneralDeliveryState.Delivered
                        ),
                    },
                },
            },
            new()
            {
                Id = Guid.NewGuid(),
                ParcelInfo = new ParcelInfo
                {
                    Id = Guid.NewGuid(),
                    Description = "ThinkPad T14s",
                    ParcelContentPrice = 1700,
                    PriceToPay = 17,
                    DeliverySourceAddress = "Sumy, Ukraine, 02000, 1, Ivanova street",
                    DeliveryDestinationAddress =
                        "Dnipropetrovsk, Ukraine, 79000, 1, Lysenko street",
                },
                ParcelStatusHistory = new List<ParcelStatus>
                {
                    new()
                    {
                        Id = Guid.NewGuid(),
                        StatusDescription = "Parcel is preparing for the delivery",
                        Date = DateTime.UtcNow,
                        DeliveryStatus = DeliveryStatuses.First(x =>
                            x.GeneralDeliveryState == GeneralDeliveryState.Preparing
                        ),
                    },
                },
            },
            new()
            {
                Id = Guid.NewGuid(),
                ParcelInfo = new ParcelInfo
                {
                    Id = Guid.NewGuid(),
                    Description = "IMac 2021",
                    ParcelContentPrice = 2500,
                    PriceToPay = 25,
                    DeliverySourceAddress = "Kyiv, Ukraine, 02000, 1, Ivanova street",
                    DeliveryDestinationAddress = "Zhytomyr, Ukraine, 79000, 1, Shevchenka street",
                },
                ParcelStatusHistory = new List<ParcelStatus>
                {
                    new()
                    {
                        Id = Guid.NewGuid(),
                        StatusDescription = "Parcel is preparing for the delivery",
                        Date = DateTime.UtcNow,
                        DeliveryStatus = DeliveryStatuses.First(x =>
                            x.GeneralDeliveryState == GeneralDeliveryState.Preparing
                        ),
                    },
                },
            },
            new()
            {
                Id = Guid.NewGuid(),
                ParcelInfo = new ParcelInfo
                {
                    Id = Guid.NewGuid(),
                    Description = "Samsung Galaxy S21",
                    ParcelContentPrice = 1000,
                    PriceToPay = 10,
                    DeliverySourceAddress = "Kyiv, Ukraine, 02000, 1, Ivanova street",
                    DeliveryDestinationAddress = "Zhytomyr, Ukraine, 79000, 1, Shevchenka street",
                },
                ParcelStatusHistory = new List<ParcelStatus>
                {
                    new()
                    {
                        Id = Guid.NewGuid(),
                        StatusDescription = "Parcel is preparing for the delivery",
                        Date = DateTime.UtcNow,
                        DeliveryStatus = DeliveryStatuses.First(x =>
                            x.GeneralDeliveryState == GeneralDeliveryState.Preparing
                        ),
                    },
                },
            },
        };

    private static IReadOnlyCollection<PostOffice> GeneratePostOffices(int amount)
    {
        var productFaker = new Faker<PostOffice>()
            .RuleFor(x => x.Id, f => Guid.NewGuid())
            .RuleFor(x => x.Address, f => f.Address.FullAddress())
            .RuleFor(x => x.Code, f => f.Finance.Iban());

        var products = Enumerable.Range(1, amount).Select(i => SeedRow(productFaker, i)).ToList();

        return products;
    }

    private static T SeedRow<T>(Faker<T> faker, int rowId)
        where T : class
    {
        var recordRow = faker.UseSeed(rowId).Generate();
        return recordRow;
    }
}

# Parcel tracking service

## Overall look on frontend

<https://github.com/Lenivaya/parcel-tracking-service/assets/49302467/fbefe15b-f665-4983-ba3b-d4ea8fd3dfc5>

<https://github.com/Lenivaya/parcel-tracking-service/assets/49302467/297ce5e3-8119-4078-b36f-e1b2b46c10a0>

<https://github.com/Lenivaya/parcel-tracking-service/assets/49302467/8e10bc2e-3777-484b-9b2f-484c022f0142>

## Get up and running with docker

- Configure .env file based on .env.example
- Initialize db and run migrations

```shell
docker compose up db db-migrations -d
```

- Start other services

```shell
docker compose up -d
```

- Add local domain to /etc/hosts

```conf
127.0.0.1 parcel-tracking.local
```

- <http://parcel-tracking.local/graphql/>

  graphql api and interactive playground

- <http://parcel-tracking.local/>

  next.js frontend

## Description

### Programming principles

#### DIP

High-level modules are not dependent on low-level ones instead they're using abstractions. For examples all things like [unit of work](backend/ParcelTrackingService.DAL/UnitOfWork/ParcelTrackingServiceUnitOfWork.cs), [repositories](backend/ParcelTrackingService.DAL/Repositories/GenericRepository.cs), services don't know anything about how db context is created or managed, they're just receiving db context as a parameter in their constructor, so concrete implementation can be easily replaced with another one, which may help in writing future tests, or migrating to another db provider.

The same logic goes for other things like logging, mapping, configuration, etc.

#### Composition over inheritance

As an example here might work [BaseGraphQlMutationResolverService](backend/ParcelTrackingService.BLL/Services/BaseGraphQlMutationResolverService.cs) which is a basic class for all mutation resolvers, it's providing some common functionality for graphql mutation resolvers like logging, error handling, etc. and can be easily extended by adding new methods or overriding existing ones. As hot chocolate graphql library is handling naming of resolvers by method names and forces common conventions, not deriving our resolvers but using this service inside is a good way to share common functionality and not break things, using [has-a](backend/ParcelTrackingService.GraphQL/Resolvers/Parcels/MutationParcelsResolver.cs) relationship instead of is-a relationship.

#### SRP

Single responsibility principle is followed in the project, classes are only responsible for things they are meant to do. Classes from DAL related to entities are only responsible for mapping entities to db tables, classes from BLL are responsible for business logic, classes from API are responsible for handling requests and responses, etc.

They don't do any extra logic like instantiating database connections, mappers or logging providers, instead this is being configured on top-level client code like [Program.cs](backend/ParcelTrackingService.GraphQL/Program.cs) using DI container, and used by classes as a dependency.

#### ISP

Different pieces of behavior are separated among different interfaces, so clients may implement only what they really need. For example, [IChainable](backend/ParcelTrackingService.BLL/Contracts/IChainable.cs) is pretty abstract interface that is used to define a contract for chainable handlers. It enforces only minimal logic that is needed for this piece of behavior, so end user may define any specific way of handling this chain and chain elements, and it will work with the rest of the code.

#### OCP

As an example for open-closed principle might work [SearchCriteriaQueryHandler](backend/ParcelTrackingService.BLL/Search/SearchCriteriaQueryHandler.cs) class, as well as overall search query handling functionality described in [this section](#chain-of-responsibility), which is responsible for building a chain of responsibility for handling search criteria. It's open for extension, as we can easily derive new types of handlers with [their own logic](backend/ParcelTrackingService.BLL//Search/Criteria/Parcel/Handlers/ParcelSearchCriteriaOverallMatchingQueryHandler.cs), add new handlers to the chain, change the order of them, remove some of them, without changing the existing code that defines the basis of this chain search query handling logic.

### Design patterns

#### Chain of responsibility

When building an API, there's often a need to have some search functionality, where we can filter data by different criteria, and we can't predict in advance which parameters will be used, so they will be declared as nullable (user might not want to do some criteria filtering at all). So at the end of the day API will receive some DTO of entity search criteria like:

```csharp
public record ParcelSearchCriteria(
    string? Matching,
    string? CurrentStatusMatching,
    DateTime? MaxDate,
    DateTime? MinDate,
    decimal? MinContentPrice,
    decimal? MaxContentPrice,
    decimal? MinPriceToPay,
    decimal? MaxPriceToPay
);
```

Which we must handle somehow.

When talking about building queries using entity framework, there is one pretty interesting type which gives us the ability to construct syntactic tree of a query in such way that it won't be executed until we explicitly tell it to do so. That feature of this type to accumulate different conditions rhymes well with what chain responsibility pattern is about. This type is _IQueryable_.

So for handling some criteria when searching, we will define basic interfaces and types needed for chain handling:

- [IChainable](backend/ParcelTrackingService.BLL/Contracts/IChainable.cs)
- [ISearchCriteriaHandler](backend/ParcelTrackingService.BLL/Contracts/ISearchCriteriaQueryHandler.cs)

Also we will define a handlers for specific kind of criteria, like it's done in [this overall matching](backend/ParcelTrackingService.BLL/Search/Criteria/Parcel/Handlers/ParcelSearchCriteriaOverallMatchingQueryHandler.cs) class, and then we will chain them together using [SearchCriteriaHandlerChainBuilder](backend/ParcelTrackingService.BLL/Search/SearchCriteriaHandlerChainBuilder.cs) class.

GraphQL resolvers will use this chain to handle query like this:

```csharp
  private IQueryable<Parcel> QueryHandler(
      ParcelTrackingServiceContext context,
      ParcelSearchCriteria? searchCriteria
  )
  {
      var queryHandlerChain = new SearchCriteriaHandlerChainBuilder<
          ParcelTrackingServiceContext,
          ParcelSearchCriteria,
          Parcel
      >().BuildChain(
          [
              new ParcelSearchCriteriaOverallMatchingQueryHandler(),
              new ParcelSearchCriteriaDateRangeQueryHandler(),
              new ParcelSearchCriteriaCurrentStatusHandler(),
              new ParcelSearchCriteriaContentPriceHandler(),
              new ParcelSearchCriteriaPriceToPayHandler()
          ]
      );

      return queryHandlerChain.HandleQuery(context, searchCriteria).AsNoTracking();
  }
```

Note that at the end of this method, the query still wasn't even executed, it's just builder which gives us the ability to add more handlers in the future, or change the order of them, or even remove some of them, without changing the client code. This even more greatly rhymes with the way hot chocolate library works, allowing to then automatically define filtering, sorting, pagination, projection (database will query only fields requested through graphql api) and all that things on top level over IQueryable type, running query over database only once, and only when it's needed.

#### Repository

Repository pattern is used to abstract data access layer logic inside some centralized place per some entity. This gives us some basic [logic](backend/ParcelTrackingService.DAL/Repositories/GenericRepository.cs) for handling entities like CRUD operations, and also some more complex operations like searching, filtering, etc. while also providing some minimal error handling and logging.

Client code may just specify needed types for generic repository generic arguments, and then use all available functionality without knowing how it's implemented. If there's some need to extend this functionality or change it somehow it may be done simply by deriving new specific class of repository for some entity and overriding/adding some methods.

#### Unit of work

[Unit of work](backend/ParcelTrackingService.DAL/UnitOfWork/UnitOfWork.cs) pattern is used to abstract db context creation and management. It's used to group all db operations into one transaction, so they will be executed atomically. It's also used to provide db context to repositories, so they don't need to know how to create it, they just receive it as a parameter in their constructor.

Such approach allows to easily replace db context provider, or to add some additional logic to db context creation, or to handle some db context lifecycle events. Example of usage may be found in [ParcelTrackingServiceUnitOfWork](backend/ParcelTrackingService.DAL/UnitOfWork/ParcelTrackingServiceUnitOfWork.cs) and [BaseGraphQlMutationResolverService](backend/ParcelTrackingService.BLL/Services/BaseGraphQlMutationResolverService.cs) classes.

#### Observer

Though observer pattern is not used directly as some few-classes code solution in some part of the project, it's used for cross-application communication. For example, when some parcel status is changed, we need to notify all clients subscribed about this change. This is done by using graphql subscriptions, what is being done by defining specific type of [subscription](backend/ParcelTrackingService.GraphQL/Resolvers/Parcels/SubscriptionParcelsResolver.cs) with specific topic (name of event and id of parcel). Then, in [MutationParcelsResolver](backend/ParcelTrackingService.GraphQL/Resolvers/Parcels/MutationParcelsResolver.cs) inside PushOneMoreParcelStatus mutation we just send a message to all clients subscribed to this event. And finally, client (which in this case is frontend app) may [subscribe](frontend/src/components/tracking-service/parcels/ParcelPage/ParcelPageWithSubscription.tsx) to this event, receive this status update for tracked parcel, and update UI accordingly.

So when some parcel status is changed, we're just sending a message through websockets to all clients which are subscribed to this event, and they're receiving this message in real-time.

### Refactoring techniques

#### Extract method

When defining query resolvers for some entity like parcels, we may have different types of pagination (cursor-based and offset-based). Since this is two different fields to which user of GraphQL API may query, they will differ only in pagination style, but all other logic for handling query with search criteria, sorting, etc. will be the same. So we may extract this common logic to some method, and then call it from both resolvers, like its done with [QueryHandler](backend/ParcelTrackingService.GraphQL/Resolvers/Parcels/QueryParcelsResolver.cs) method of QueryParcelsResolver.

#### Extract variable

Code doesn't use complex obscure statements when it's not obvious what one of those strange method calls means and why it was put there in a such way. Instead different method calls are being extracted into variables with meaningful names, so it's clear what they do and why they're being used. So when there's some code like [this](backend/ParcelTrackingService.BLL/Services/BaseGraphQlMutationResolverService.cs):

```csharp
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
```

It's clearly seen what is repo, what is mapped entity, what we are doing by checking whether operation was successful, and what we're doing in case of success, and what we're doing in case of exception (again properly named according to it's type).

#### Introduce Parameter Object

In query resolvers, it was possible to go the wrong way and turn the code into an unreadable mess, passing different parts of search criteria as separate parameters, like this:

```csharp
public IQueryable<Parcel> GetParcelsOffset(
    ParcelTrackingServiceContext context,

    // Here goes some possible mess that was avoided
    matchingString? matching,
    maxDate? maxDate,
    minDate? minDate,
    minContentPrice? minContentPrice,
    // ... and so on
)
{
    return QueryHandler(context, searchCriteria);
}
```

Instead of doing it in such an _interesting_ manner, we just introduce specific objects that groups all this parameters together into [search criteria](backend/ParcelTrackingService.BLL/Search/Criteria/Parcel/ParcelSearchCriteria.cs), making code [less of a mess](backend/ParcelTrackingService.GraphQL/Resolvers/Parcels/QueryParcelsResolver.cs).

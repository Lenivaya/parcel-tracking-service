FROM mcr.microsoft.com/dotnet/aspnet:8.0-alpine AS base
USER $APP_UID
WORKDIR /app
EXPOSE 8080
EXPOSE 8081

FROM mcr.microsoft.com/dotnet/sdk:8.0-alpine AS build
ARG BUILD_CONFIGURATION=Release
WORKDIR /src
COPY ["ParcelTrackingService.GraphQL/ParcelTrackingService.GraphQL.csproj", "ParcelTrackingService.GraphQL/"]
COPY ["ParcelTrackingService.DAL/ParcelTrackingService.DAL.csproj", "ParcelTrackingService.DAL/"]
COPY ["ParcelTrackingService.BLL/ParcelTrackingService.BLL.csproj", "ParcelTrackingService.BLL/"]
RUN dotnet restore "ParcelTrackingService.GraphQL/ParcelTrackingService.GraphQL.csproj"

COPY . .
WORKDIR "/src/ParcelTrackingService.GraphQL"
RUN dotnet build "ParcelTrackingService.GraphQL.csproj" -c $BUILD_CONFIGURATION -o /app/build

FROM build AS publish
ARG BUILD_CONFIGURATION=Release
RUN dotnet publish "ParcelTrackingService.GraphQL.csproj" -c $BUILD_CONFIGURATION -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .



ENTRYPOINT ["dotnet", "ParcelTrackingService.GraphQL.dll"]

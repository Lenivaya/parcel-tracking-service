FROM mcr.microsoft.com/dotnet/aspnet:8.0-alpine AS base
USER $APP_UID
WORKDIR /app

FROM mcr.microsoft.com/dotnet/sdk:8.0-alpine AS build
ARG BUILD_CONFIGURATION=Release
WORKDIR /src
COPY ["ParcelTrackingService.GraphQL/ParcelTrackingService.GraphQL.csproj", "ParcelTrackingService.GraphQL/"]
COPY ["ParcelTrackingService.DAL/ParcelTrackingService.DAL.csproj", "ParcelTrackingService.DAL/"]
COPY ["ParcelTrackingService.BLL/ParcelTrackingService.BLL.csproj", "ParcelTrackingService.BLL/"]

COPY . .
RUN dotnet restore ParcelTrackingService.sln

FROM build as migrations
RUN dotnet tool install --version 8.0.4 --global dotnet-ef
ENV PATH="$PATH:/root/.dotnet/tools"
ENTRYPOINT dotnet ef database update --project ParcelTrackingService.DAL/ParcelTrackingService.DAL.csproj --startup-project ParcelTrackingService.GraphQL/ParcelTrackingService.GraphQL.csproj --context ParcelTrackingService.DAL.ParcelTrackingServiceContext 

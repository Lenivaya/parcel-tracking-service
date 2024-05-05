default:
  just --list

reformat-backend:
    dotnet csharpier backend

# Back
backend-graphql-schema $DOTNET_WATCH_SUPPRESS_LAUNCH_BROWSER="1":
    dotnet run --project backend/ParcelTrackingService.GraphQL -- schema export --output schema.graphql
    
backend-graphql-develop $DOTNET_WATCH_SUPPRESS_LAUNCH_BROWSER="1":
    dotnet watch run --project backend/ParcelTrackingService.GraphQL 

# Frontend
frontend-develop:
    cd frontend; pnpm run dev

frontend-graphql-schema-watch:
    cd frontend; watchexec --restart --exts ts,tsx -- pnpm run code:graphql:gen

# Parcel tracking service

## Overall look on frontend

https://github.com/Lenivaya/parcel-tracking-service/assets/49302467/fbefe15b-f665-4983-ba3b-d4ea8fd3dfc5

https://github.com/Lenivaya/parcel-tracking-service/assets/49302467/297ce5e3-8119-4078-b36f-e1b2b46c10a0

https://github.com/Lenivaya/parcel-tracking-service/assets/49302467/8e10bc2e-3777-484b-9b2f-484c022f0142

## Get up and running with docker

- Configure .env file bases on .env.example
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

- http://parcel-tracking.local/graphql/

  graphql api and interactive playground

- http://parcel-tracking.local/

  next.js frontend

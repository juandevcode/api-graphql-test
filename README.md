# API GraphQL - Technical Test Blossom

This project exposes a GraphQL server that allows you to query information about characters from the Rick and Morty universe stored in a PostgreSQL database. The data is automatically updated from the Rick and Morty public API every 12 hours.

## Stack

- Node.js
- TypeScript
- Apollo Server
- Express.js
- GraphQL
- PostgreSQL
- Sequelize (ORM)
- Docker & Docker Compose
- Jest
- Arquitectura limpia

## Architecture (Clean Architecture)

```
src/
├── domain/
│   ├── entities/
│
├── application/
    ├── services/
│
├── infrastructure/
│   ├── database/
│   ├── external-api/
    ├── jobs-api/
│
├── interface/
│   ├── graphql/
    ├── middleware/
│   │
│   └── server.js
│
├── shared/
│   └── config/
    └── decorators/
│
└── index.js
```

### Explanation:

**domain**: Domain entities.

**application**: Business use cases.

**infrastructure**: Persistence (Sequelize + PostgreSQL) and the Rick and Morty external API.

**interface** (delivery layer): GraphQL with its schemas and resolvers.

**shared**: Reusable utilities and configuration.

**index.js**: Application entry point.

## ERD diagram of the database

```
┌──────────────────────┐
│     Characters       │
├──────────────────────┤
│ id              PK   │ INTEGER
│ name                 │ STRING
│ status               │ STRING
│ species              │ STRING
│ type                 │ STRING (opcional)
│ gender               │ STRING
│ origin               │ STRING
│ image                │ STRING (URL)
│ created_at           │ DATE
│ updated_at           │ DATE
└──────────────────────┘
```

## Run the application

### Clone the repository

```
git clone https://github.com/juandevcode/api-graphql-test.git
```

```
cd api-graphql-test
```

### Create the .env file

```
PORT=4000
NODE_ENV=test
POSTGRES_USER=postgres
POSTGRES_PASSWORD=123456
POSTGRES_DB=graphqlrickmorty
POSTGRES_HOST=db-postgres-graphql-app-technical-test
```

### Run with Docker Compose

```
docker-compose up --build
```

## API Documentation (GraphQL Server)

### characters: Get Characters

Local URL: http://localhost:4000/graphql

```
query {
  characters {
    id
    name
    status
    species
    gender
    origin
    image
  }
}

```

And the following filters

```
query {
  characters(
    name: "Rick"
    status: "Alive"
    species: "Human"
    gender: "Male"
    origin: "Earth (C-137)"
  ) {
    id
    name
    status
    species
    gender
    origin
    image
  }
}
```

> [!NOTE]
> All filters are optional. They can be combined.

## Migrations and Seeders

Migrations and initial loading are executed automatically with:

```
docker-compose up --build
```

## Tests

Unit and integration tests are available with Jest:

```
npm test
```

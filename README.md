# API GraphQL - Technical Test Blossom

This project is an API using Express and GraphQL that allows searching for Rick and
Morty characters.

## Stack

- Node.js
- TypeScript
- Express.js
- GraphQL
- PostgreSQL
- Sequelize
- Docker & Docker Compose

## Architecture (Clean Architecture)

```
src/
├── domain/
│   ├── entities/
│
├── application/
│   ├── use-cases/
│
├── infrastructure/
│   ├── database/
│   ├── external-api/
│
├── interface/
│   ├── graphql/
│   │
│   └── server.js
│
├── shared/
│   └── utils/
│   │   └── apiClient.js
│   └── config.js
│
└── index.js
```

### Explanation:

**domain**: Domain entities and their interfaces (repository contracts).

**application**: Business use cases.

**infrastructure**: Persistence (Sequelize + PostgreSQL) and the Rick and Morty external API.

**interface** (delivery layer): GraphQL with its schemas and resolvers.

**shared**: Reusable utilities and configuration.

**index.js**: Application entry point.

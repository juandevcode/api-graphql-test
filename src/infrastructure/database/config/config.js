const fs = require("fs");

module.exports = {
  development: {
    username: "postgres",
    password: "123456",
    database: "graphqlrickmorty",
    host: "db-postgres-graphql-app-technical-test",
    port: 5432,
    dialect: "postgres",
    dialectOptions: {
      bigNumberStrings: true,
    },
  },
  test: {
    username: "postgres",
    password: "123456",
    database: "graphqlrickmorty",
    host: "localhost",
    port: 5432,
    dialect: "postgres",
    dialectOptions: {
      bigNumberStrings: true,
    },
  },
};

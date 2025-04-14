import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("graphqlrickmorty", "postgres", "123456", {
  host: "localhost",
  dialect: "postgres",
});

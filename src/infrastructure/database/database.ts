import { Sequelize } from "sequelize";
import { envs } from "../../shared/config/envs";

export const sequelize = new Sequelize("graphqlrickmorty", "postgres", "123456", {
  host: envs.NODE_ENV === "test" ? "localhost" : envs.POSTGRES_HOST,
  dialect: "postgres",
});

export const connectDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected...");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

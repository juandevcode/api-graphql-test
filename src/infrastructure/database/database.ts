import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("graphqlrickmorty", "postgres", "123456", {
  host: "localhost",
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

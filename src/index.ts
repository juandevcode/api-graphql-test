import { envs } from "./shared/config/envs";
import { Server } from "./server";
import { sequelize } from "./infrastructure/database/sequelize";

(async () => {
  main();
})();

async function main() {
  const server = new Server({
    port: envs.PORT,
  });

  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");

    await server.start();
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

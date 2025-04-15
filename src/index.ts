import { envs } from "./shared/config/envs";
import { Server } from "./interface/server";
import { connectDatabase } from "./infrastructure/database/database";

(async () => {
  main();
})();

async function main() {
  const server = new Server({
    port: envs.PORT,
  });

  try {
    await connectDatabase();
    await server.start();
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

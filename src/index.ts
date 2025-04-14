import { envs } from "./shared/config/envs";
import { Server } from "./server";

(async () => {
  main();
})();

function main() {
  const server = new Server({
    port: envs.PORT,
  });

  server.start();
}

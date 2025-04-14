import express from "express";
import { ServerRoutes } from "./presentation/routes/server.routes";

interface Options {
  port: number;
}

export class Server {
  private app = express();
  private readonly port: number;

  constructor(options: Options) {
    const { port } = options;
    this.port = port;
  }

  start() {
    //* Middlewares
    this.app.use(express.json());

    //* Routes
    this.app.use(ServerRoutes.getRoutes());

    this.app.listen(this.port, () => {
      console.log("Server running on PORT:", this.port);
    });
  }
}

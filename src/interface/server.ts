import express from "express";

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
    // Middlewares
    this.app.use(express.json());

    this.app.listen(process.env.PORT, () => {
      console.log("Server running on PORT:", process.env.PORT);
    });
  }
}

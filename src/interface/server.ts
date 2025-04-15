import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "../interface/graphql/schemas/character.schema";
import { characterResolvers } from "../interface/graphql/resolvers/character.resolver";
import { startCharacterSyncCron } from "../infrastructure/jobs/characterSyncCron";
import { requestLogger } from "./middleware/logger.middleware";
import express from "express";
import http from "http";

interface Options {
  port: number;
}

interface MyContext {
  token?: String;
}

export class Server {
  private readonly port: number;

  constructor(options: Options) {
    const { port } = options;
    this.port = port;
  }

  async start() {
    const app = express();
    const httpServer = http.createServer(app);
    const server = new ApolloServer<MyContext>({
      typeDefs,
      resolvers: characterResolvers,
      introspection: true,
      plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    });

    await server.start();

    app.use(
      "/graphql",
      express.json(),
      requestLogger,
      expressMiddleware(server, {
        context: async ({ req }) => ({ token: req.headers.token }),
      })
    );

    await new Promise<void>((resolve) => httpServer.listen({ port: this.port }, resolve));

    console.log(`Server ready at: ${"http://localhost:"}${this.port}`);

    // start Character Sync Cron
    startCharacterSyncCron();
  }
}

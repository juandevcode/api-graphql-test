import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "../interface/graphql/schemas/character.schema";
import { characterResolvers } from "../interface/graphql/resolvers/character.resolver";
import { startCharacterSyncCron } from "../infrastructure/jobs/characterSyncCron";

interface Options {
  port: number;
}

export class Server {
  private readonly port: number;

  constructor(options: Options) {
    const { port } = options;
    this.port = port;
  }

  async start() {
    //* Middlewares

    // Setup Server GraphQL
    const server = new ApolloServer({
      typeDefs,
      resolvers: characterResolvers,
    });

    // Start Server GraphQL
    const { url } = await startStandaloneServer(server, {
      listen: { port: this.port },
    });

    console.log(`Server ready at: ${url}`);

    // start Character Sync Cron
    startCharacterSyncCron();
  }
}

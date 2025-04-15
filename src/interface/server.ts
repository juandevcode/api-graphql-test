import express from "express";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "../interface/graphql/schemas/character.schema";
import { characterResolvers } from "../interface/graphql/resolvers/character.resolver";

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

  async start() {
    //* Middlewares

    const server = new ApolloServer({
      typeDefs,
      resolvers: characterResolvers,
    });

    const { url } = await startStandaloneServer(server, {
      listen: { port: 4000 },
    });

    console.log(`Server ready at: ${url}`);
  }
}

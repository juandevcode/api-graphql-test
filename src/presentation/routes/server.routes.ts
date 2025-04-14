import { Router } from "express";
import { graphqlHTTP } from "express-graphql";

import { ServerControllers } from "../controllers/server.controllers";
import { schema } from "../../infrastructure/graphql/schema";

export class ServerRoutes {
  static getRoutes(): Router {
    const router = Router();

    const serverControllers = new ServerControllers();

    router.use("/graphql", graphqlHTTP({ schema, graphiql: true }));

    return router;
  }
}

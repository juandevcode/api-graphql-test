import { GraphQLSchema, GraphQLObjectType } from "graphql";
import { characterQuery } from "./resolvers/characterResolver";

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    characters: characterQuery,
  },
});

export const schema = new GraphQLSchema({
  query: RootQuery,
});

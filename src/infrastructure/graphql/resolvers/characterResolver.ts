import { GraphQLString } from "graphql";

export const characterQuery = {
  type: GraphQLString,
  resolve: () => {
    return "characters...";
  },
};

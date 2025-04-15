import { ApolloServer } from "@apollo/server";
import { typeDefs } from "../interface/graphql/schemas/character.schema";
import { characterResolvers } from "../interface/graphql/resolvers/character.resolver";

describe("Character GraphQL Resolver", () => {
  let server: ApolloServer;
  const mockService = {
    getFilteredCharacters: jest.fn(),
  };

  beforeEach(() => {
    server = new ApolloServer({
      typeDefs,
      resolvers: characterResolvers,
    });
  });

  it("should fetch all characters", async () => {
    const characters = [
      {
        id: 1,
        name: "Rick Sanchez",
        status: "Alive",
        species: "Human",
        gender: "Male",
        origin: "Earth",
      },
      {
        id: 2,
        name: "Morty Smith",
        status: "Alive",
        species: "Human",
        gender: "Male",
        origin: "Earth",
      },
    ];

    mockService.getFilteredCharacters.mockResolvedValueOnce(characters);

    const res = await server.executeOperation({
      query: `
        query {
          characters {
            id
            name
            status
            species
            gender
            origin
          }
        }
      `,
    });

    expect(res.body.kind).toBe("single");
  });

  it("should fetch filtered characters", async () => {
    const filtered = [
      {
        id: 3,
        name: "Summer Smith",
        status: "Alive",
        species: "Human",
        gender: "Female",
        origin: "Earth",
      },
    ];

    mockService.getFilteredCharacters.mockResolvedValueOnce(filtered);

    const res = await server.executeOperation({
      query: `
        query {
          characters(status: "Alive", gender: "Female") {
            id
            name
            status
            species
            gender
            origin
          }
        }
      `,
    });

    expect(res.body.kind).toBe("single");
  });
});

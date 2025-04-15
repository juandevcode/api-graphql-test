import { Character } from "../../../infrastructure/database/models";

const characters = [
  {
    id: 1,
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
    gender: "Male",
  },
  {
    id: 1,
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
    gender: "Male",
  },
  {
    id: 1,
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
    gender: "Male",
  },
];

const characterResolvers = {
  Query: {
    characters: async () => {
      try {
        return await Character.findAll();
      } catch (error) {
        throw new Error(`Error searching characters`);
      }
    },
  },
};

export { characterResolvers };

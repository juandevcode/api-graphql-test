import { Character } from "../../../domain/entities/character.entity";

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
    characters: () => characters,
    /*GetPersons: async () => {
      try {
        return await Character.findAll();
      } catch (error) {
        throw new Error(`Error searching characters`);
      }
    },*/
  },
};

export { characterResolvers };

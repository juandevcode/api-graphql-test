import { CharacterService } from "../../../application/services/character.service";

const characterService = new CharacterService();

export const characterResolvers = {
  Query: {
    characters: async (_: any, args: any) => {
      return await characterService.getFilteredCharacters(args);
    },
  },
};

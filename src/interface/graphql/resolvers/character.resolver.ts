import redis from "../../../infrastructure/cache/redisClient";
import { CharacterService } from "../../../application/services/character.service";

const characterService = new CharacterService();

export const characterResolvers = {
  Query: {
    characters: async (_: any, args: any) => {
      //* Redis Setuo: To be solved
      /*const cacheKey = `characters:${JSON.stringify(args)}`;
      const cached = await redis.get(cacheKey);

      if (cached) {
        console.log("Data from Redis");
        return JSON.parse(cached);
      }*/

      const result = await characterService.getFilteredCharacters(args);

      /*await redis.set(cacheKey, JSON.stringify(result), {
        EX: 43200, // 12 horas
      });*/

      return result;
    },
  },
};

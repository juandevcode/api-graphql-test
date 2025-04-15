import { fetchCharacters } from "../../infrastructure/external-api/rickAndMortyApi";
import { Character } from "../../infrastructure/database/models";

export const syncCharacters = async () => {
  try {
    const characters = await fetchCharacters();

    for (const character of characters) {
      console.log(character.id);
      const existing = await Character.findOne({ where: { id: character.id } });

      if (!existing) {
        await Character.create({
          id: character.id,
          name: character.name,
          status: character.status,
          species: character.species,
          gender: character.gender,
          origin: character.origin.name,
          image: character.image,
        });
        console.log(`[SYNC] Created character: ${character.name}`);
      } else {
        const isDifferent =
          existing.name !== character.name ||
          existing.status !== character.status ||
          existing.species !== character.species ||
          existing.gender !== character.gender ||
          existing.origin !== character.origin.name ||
          existing.image !== character.image;

        if (isDifferent) {
          await existing.update({
            name: character.name,
            status: character.status,
            species: character.species,
            gender: character.gender,
            origin: character.origin.name,
            image: character.image,
          });
          console.log(`[SYNC] Updated character: ${character.name}`);
        }
      }
    }

    console.log("[SYNC] Character sync complete.");
  } catch (error) {
    console.error("[SYNC] Error syncing characters:", error);
  }
};

import axios from "axios";

const API_URL = "https://rickandmortyapi.com/graphql";

export interface RickAndMortyCharacter {
  id: string;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: { name: string };
  image: string;
}

export const fetchCharacters = async (page = 1, count = 15): Promise<RickAndMortyCharacter[]> => {
  const { data } = await axios.post(API_URL, {
    query: `
      query {
        characters(page: ${page}) {
          results {
            id
            name
            status
            species
            gender
            origin { name }
            image
          }
        }
      }
    `,
  });

  const characters: RickAndMortyCharacter[] = data.data.characters.results;

  return characters.slice(0, count);
};

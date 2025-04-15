export const typeDefs = `

  enum CharacterStatus {
    Alive
    Dead
    unknown
  }

  enum CharacterStatus {
    Female
    Male
    Genderless
    unknown
  }


  type Character {
    id: ID
    name: String
    species: String
    gender: CharacterStatus
    status: CharacterStatus
  }

  type Query {
    characters: [Character!]
  }
`;

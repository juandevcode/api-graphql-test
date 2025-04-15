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
    image: String
    origin: String
  }

  type Query {
    characters(status: String, species: String, gender: String, name: String, origin: String): [Character!]
  }
`;

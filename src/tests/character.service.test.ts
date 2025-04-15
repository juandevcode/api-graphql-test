import { CharacterService } from "../../src/application/services/character.service";

const mockRepo = {
  findByFilters: jest.fn(),
};

describe("CharacterService", () => {
  let service: CharacterService;

  beforeEach(() => {
    service = new CharacterService();
  });

  it("should return empty array when no characters match filters", async () => {
    const filters = {
      status: "Dead",
      species: "Alien",
    };

    mockRepo.findByFilters.mockResolvedValueOnce([]);

    const result = await service.getFilteredCharacters(filters);

    expect(result).toEqual([]);
  });
});

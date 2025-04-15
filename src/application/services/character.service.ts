import { LogExecutionTime } from "../../shared/decorators/logExecutionTime.docorator";
import { Character } from "../../infrastructure/database/models";
import { Op } from "sequelize";

export class CharacterService {
  @LogExecutionTime
  async getFilteredCharacters(filters: any) {
    const where: any = {};

    if (filters) {
      if (filters.status) where.status = filters.status;
      if (filters.species) where.species = filters.species;
      if (filters.gender) where.gender = filters.gender;
      if (filters.name) where.name = { [Op.iLike]: `%${filters.name}%` };
      if (filters.origin) where.origin = { [Op.iLike]: `%${filters.origin}%` };
    }

    return await Character.findAll({ where });
  }
}

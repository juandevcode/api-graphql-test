import { DataTypes, Model, Sequelize } from "sequelize";
import { sequelize } from "../../database/database";

export class Character extends Model {
  public id!: string;
  public name!: string;
  public status!: string;
  public species!: string;
  public gender!: string;
  public origin!: string;
  public image!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Character.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    status: DataTypes.STRING,
    species: DataTypes.STRING,
    gender: DataTypes.STRING,
    origin: DataTypes.STRING,
    image: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "Character",
    tableName: "Characters",
    timestamps: true,
  }
);

import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../infrastructure/database/database"; // Conexión con Sequelize

export class Character extends Model {
  public id!: number;
  public name!: string;
  public status!: string;
  public species!: string;
  public gender!: string;
}

Character.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    species: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "characters",
    timestamps: true,
  }
);

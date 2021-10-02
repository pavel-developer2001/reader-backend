import { sequelize } from "../../core/db.js";
import Sequelize from "sequelize";

export const GenresModel = sequelize.define("genres", {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: Sequelize.INTEGER,
  },
  genre: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

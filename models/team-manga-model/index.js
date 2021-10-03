import { sequelize } from "../../core/db.js";
import Sequelize from "sequelize";

export const TeamManga = sequelize.define("team-mangas", {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: Sequelize.INTEGER,
  },
});

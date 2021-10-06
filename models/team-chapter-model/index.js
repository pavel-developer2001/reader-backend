import { sequelize } from "../../core/db.js";
import Sequelize from "sequelize";

export const TeamChapterModel = sequelize.define("team-chapters", {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: Sequelize.INTEGER,
  },
});

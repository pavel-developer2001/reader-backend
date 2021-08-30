import { sequelize } from "../../core/db.js";
import Sequelize from "sequelize";

export const ChapterModel = sequelize.define("chapters", {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: Sequelize.INTEGER,
  },
  numberChapter: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  volumeChapter: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  countLikes: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: "0",
  },
});

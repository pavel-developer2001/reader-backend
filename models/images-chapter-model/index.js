import { sequelize } from "../../core/db.js";
import Sequelize from "sequelize";
import { ChapterModel } from "../chapter-model/index.js";

export const ImagesChapterModel = sequelize.define("images-chapter", {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: Sequelize.INTEGER,
  },
  imageChapter: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

ChapterModel.hasMany(ImagesChapterModel);
ImagesChapterModel.belongsTo(ChapterModel);

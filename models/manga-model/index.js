import { sequelize } from "../../core/db.js";
import Sequelize from "sequelize";
import { ImagesChapterModel } from "../images-chapter-model/index.js";
import { ChapterModel } from "../chapter-model/index.js";
import { BookMarksModel } from "../book-marks-model/index.js";
import { RatingMangaModel } from "../rating-manga-model/index.js";

export const MangaModel = sequelize.define("mangas", {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: Sequelize.INTEGER,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  englishTitle: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  originalTitle: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  status: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: "Продолжается",
  },
  mangaDescription: {
    type: Sequelize.STRING(1500),
    allowNull: false,
  },
  yearOfIssue: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  mangaCover: {
    type: Sequelize.STRING,
    defaultValue: "",
  },
});
MangaModel.hasMany(ChapterModel);
ChapterModel.belongsTo(MangaModel);

MangaModel.hasMany(ImagesChapterModel);
ImagesChapterModel.belongsTo(MangaModel);

MangaModel.hasMany(BookMarksModel);
BookMarksModel.belongsTo(MangaModel);

MangaModel.hasMany(RatingMangaModel);
RatingMangaModel.belongsTo(MangaModel);

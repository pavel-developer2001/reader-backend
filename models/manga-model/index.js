import { sequelize } from "../../core/db.js";
import Sequelize from "sequelize";
import { ImagesChapterModel } from "../images-chapter-model/index.js";
import { ChapterModel } from "../chapter-model/index.js";
import { BookMarksModel } from "../book-marks-model/index.js";
import { RatingMangaModel } from "../rating-manga-model/index.js";
import { GenresModel } from "../genres-model/index.js";
import { TagsModel } from "../tags-model/index.js";
import { CommentMangaModel } from "../comment-manga-model/index.js";
import { TeamManga } from "../team-manga-model/index.js";

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
  mangaDescription: {
    type: Sequelize.STRING(1500),
    allowNull: false,
  },
  yearOfIssue: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  typeManga: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  statusManga: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  ageRatingManga: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  mangaCover: {
    type: Sequelize.STRING,
    defaultValue: "",
  },
  watchCount: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: "0",
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

MangaModel.hasMany(GenresModel);
GenresModel.belongsTo(MangaModel);

MangaModel.hasMany(TagsModel);
TagsModel.belongsTo(MangaModel);

MangaModel.hasMany(CommentMangaModel);
CommentMangaModel.belongsTo(MangaModel);

MangaModel.hasMany(TeamManga);
TeamManga.belongsTo(MangaModel);

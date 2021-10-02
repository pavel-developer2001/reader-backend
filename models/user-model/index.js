import { sequelize } from "../../core/db.js";
import Sequelize from "sequelize";
import { MangaModel } from "../manga-model/index.js";
import { TeamModel } from "../team-model/index.js";
import { ImagesChapterModel } from "../images-chapter-model/index.js";
import { ChapterModel } from "../chapter-model/index.js";
import { BookMarksModel } from "../book-marks-model/index.js";
import { RatingMangaModel } from "../rating-manga-model/index.js";
import { CommentMangaModel } from "../comment-manga-model/index.js";

export const UserModel = sequelize.define("users", {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: Sequelize.INTEGER,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  avatar: {
    type: Sequelize.STRING,
    defaultValue: "",
  },
});
UserModel.hasMany(MangaModel);
MangaModel.belongsTo(UserModel);

UserModel.hasMany(TeamModel);
TeamModel.belongsTo(UserModel);

UserModel.hasMany(ChapterModel);
ChapterModel.belongsTo(UserModel);

UserModel.hasMany(ImagesChapterModel);
ImagesChapterModel.belongsTo(UserModel);

UserModel.hasMany(BookMarksModel);
BookMarksModel.belongsTo(UserModel);

UserModel.hasMany(RatingMangaModel);
RatingMangaModel.belongsTo(UserModel);

UserModel.hasMany(CommentMangaModel);
CommentMangaModel.belongsTo(UserModel);

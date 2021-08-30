import { sequelize } from "../../core/db.js";
import Sequelize from "sequelize";
import { ImagesChapterModel } from "../images-chapter-model/index.js";
import { MangaModel } from "../manga-model/index.js";
import { ChapterModel } from "../chapter-model/index.js";

export const TeamModel = sequelize.define("teams", {
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
  teamDescription: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});
TeamModel.hasMany(ImagesChapterModel);
ImagesChapterModel.belongsTo(TeamModel);

TeamModel.hasMany(ChapterModel);
ChapterModel.belongsTo(TeamModel);

TeamModel.hasMany(MangaModel);
MangaModel.belongsTo(TeamModel);

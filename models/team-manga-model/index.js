import { sequelize } from "../../core/db.js";
import Sequelize from "sequelize";
import { ImagesChapterModel } from "../images-chapter-model/index.js";
import { MangaModel } from "../manga-model/index.js";
import { ChapterModel } from "../chapter-model/index.js";
import { TeamMemberModel } from "../team-member-model/index.js";

export const TeamManga = sequelize.define("team-mangas", {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: Sequelize.INTEGER,
  },
});

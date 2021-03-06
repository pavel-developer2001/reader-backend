import { sequelize } from "../../core/db.js";
import Sequelize from "sequelize";
import { ImagesChapterModel } from "../images-chapter-model/index.js";
import { MangaModel } from "../manga-model/index.js";
import { ChapterModel } from "../chapter-model/index.js";
import { TeamMemberModel } from "../team-member-model/index.js";
import { TeamMangaModel } from "../team-manga-model/index.js";
import { TeamChapterModel } from "../team-chapter-model/index.js";
import { TeamInvitationModel } from "../team-invitation-model/index.js";

export const TeamModel = sequelize.define("teams", {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: Sequelize.INTEGER,
  },
  teamName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  teamSubtitle: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  teamDescription: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  teamCover: {
    type: Sequelize.STRING,
    defaultValue: "",
    allowNull: false,
  },
  teamRank: {
    type: Sequelize.STRING,
    defaultValue: "Бронзовый",
    allowNull: false,
  },
});
TeamModel.hasMany(TeamMemberModel);
TeamMemberModel.belongsTo(TeamModel);

TeamModel.hasMany(TeamMangaModel);
TeamMangaModel.belongsTo(TeamModel);

TeamModel.hasMany(TeamChapterModel);
TeamChapterModel.belongsTo(TeamModel);

TeamModel.hasMany(TeamInvitationModel);
TeamInvitationModel.belongsTo(TeamModel);

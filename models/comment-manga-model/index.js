import { sequelize } from "../../core/db.js";
import Sequelize from "sequelize";

export const CommentMangaModel = sequelize.define("comments-manga", {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: Sequelize.INTEGER,
  },
  commentText: {
    type: Sequelize.STRING(500),
    allowNull: false,
  },
  spoiler: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
});

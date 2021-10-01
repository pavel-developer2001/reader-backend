import { sequelize } from "../../core/db.js";
import Sequelize from "sequelize";

export const RatingMangaModel = sequelize.define("rating-manga", {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: Sequelize.INTEGER,
  },
  rating: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

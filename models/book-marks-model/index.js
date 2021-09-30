import { sequelize } from "../../core/db.js";
import Sequelize from "sequelize";

export const BookMarksModel = sequelize.define("book-marks", {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: Sequelize.INTEGER,
  },
  category: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

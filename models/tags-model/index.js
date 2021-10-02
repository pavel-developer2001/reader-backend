import { sequelize } from "../../core/db.js";
import Sequelize from "sequelize";

export const TagsModel = sequelize.define("tags", {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: Sequelize.INTEGER,
  },
  tag: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

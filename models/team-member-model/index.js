import { sequelize } from "../../core/db.js";
import Sequelize from "sequelize";

export const TeamMemberModel = sequelize.define("team-member", {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: Sequelize.INTEGER,
  },
  roleInTeam: {
    type: Sequelize.STRING,
    defaultValue: "Участник",
    allowNull: false,
  },
});

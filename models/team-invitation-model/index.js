import { sequelize } from "../../core/db.js";
import Sequelize from "sequelize";

export const TeamInvitationModel = sequelize.define("team-invitations", {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: Sequelize.INTEGER,
  },
  rank: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: "Участник",
  },
});

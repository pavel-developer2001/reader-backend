import { TeamMemberModel } from "../../models/team-member-model/index.js";

import ApiError from "../../exceptions/api-error/index.js";
import { TeamModel } from "../../models/team-model/index.js";

class TeamMemberService {
  async addMemberForCreateTeam(teamId, userId) {
    try {
      await TeamMemberModel.create({ roleInTeam: "Глава", teamId, userId });
    } catch (error) {}
  }
  async getTeams(id) {
    try {
      const team = await TeamMemberModel.findAll({
        where: { userId: id },
        include: [{ model: TeamModel }],
      });
      return team;
    } catch (error) {}
  }
}
export default new TeamMemberService();

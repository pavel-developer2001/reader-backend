import { TeamMemberModel } from "../../models/team-member-model/index.js";

import ApiError from "../../exceptions/api-error/index.js";

class TeamMemberService {
  async addMemberForCreateTeam(teamId, userId) {
    try {
      await TeamMemberModel.create({ roleInTeam: "Глава", teamId, userId });
    } catch (error) {}
  }
}
export default new TeamMemberService();

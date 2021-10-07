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
  async joinToTeam(rank, teamId, userId) {
    try {
      // const candidate = await TeamMemberModel.findAll({
      //   where: { rank, teamId, userId },
      // });
      // console.log("candidate -", candidate);
      // if (candidate.length > 0) {
      //   return;
      // }
      const addmember = await TeamMemberModel.create({
        roleInTeam: rank,
        teamId,
        userId,
      });

      const member = await TeamMemberModel.findOne({
        where: { id: addmember.id },
        include: [{ model: TeamModel }],
      });

      return member;
    } catch (error) {
      console.log("Error", error);
    }
  }
  async removeMember(id) {
    try {
      const member = await TeamMemberModel.findOne({ where: { id } });
      await TeamMemberModel.destroy({ where: { id } });
      return member;
    } catch (error) {}
  }
}
export default new TeamMemberService();

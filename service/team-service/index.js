import { TeamModel } from "../../models/team-model/index.js";

import ApiError from "../../exceptions/api-error/index.js";

class TeamService {
  async getAllTeams() {
    try {
      const teams = await TeamModel.findAll();
      return teams;
    } catch (error) {
      console.log(error);
    }
  }
  async addTeam(teamName, teamSubtitle, teamDescription, userId) {
    try {
      const team = await TeamModel.create({
        teamName,
        teamSubtitle,
        teamDescription,
        userId,
      });
      return team;
    } catch (error) {}
  }
  async addCover(id, teamCover) {
    try {
      if (!teamCover) {
        return null;
      }
      await TeamModel.update({ teamCover }, { where: { id } });
    } catch (error) {}
  }
  async getTeam(id) {
    try {
      const team = await TeamModel.findOne({ where: { id } });
      return team;
    } catch (error) {}
  }
}
export default new TeamService();

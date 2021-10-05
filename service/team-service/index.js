import { TeamModel } from "../../models/team-model/index.js";

import ApiError from "../../exceptions/api-error/index.js";
import { TeamMemberModel } from "../../models/team-member-model/index.js";
import { MangaModel } from "../../models/manga-model/index.js";

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
  async getTeamData(id) {
    const team = await TeamModel.findOne({ where: { id } });
    const members = await TeamMemberModel.findAll({
      where: { teamId: team.id },
    });
    const mangas = await MangaModel.findAll({ where: { teamId: team.id } });
    return { team, members, mangas };
  }
}
export default new TeamService();

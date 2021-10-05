import TeamService from "../../service/team-service/index.js";
import CoverService from "../../service/cover-service/index.js";
import TeamMemberService from "../../service/team-member-service/index.js";
import ApiError from "../../exceptions/api-error/index.js";

class TeamController {
  async getTeams(req, res) {
    try {
      const teams = await TeamService.getAllTeams();
      return res.json(teams);
    } catch (error) {}
  }
  async createTeam(req, res) {
    try {
      const { teamName, teamSubtitle, teamDescription, userId } = req.body;
      const team = await TeamService.addTeam(
        teamName,
        teamSubtitle,
        teamDescription,
        userId
      );
      const teamCover = req.file;
      await CoverService.uploadForTeam(team.id, teamCover);
      await TeamMemberService.addMemberForCreateTeam(team.id, team.userId);
      const foundTeam = await TeamService.getTeam(team.id);
      res.status(200).json(foundTeam);
    } catch (error) {}
  }
  async getTeam(req, res) {
    try {
      const { id } = req.params;
      const team = await TeamService.getTeamData(id);
      res.status(200).json(team);
    } catch (error) {}
  }
  async getAllTeamForUser(req, res) {
    try {
      const { id } = req.params;
      const teams = await TeamMemberService.getTeams(id);
      res.status(200).json(teams);
    } catch (error) {}
  }
}
export default new TeamController();

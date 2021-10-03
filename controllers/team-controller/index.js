import TeamService from "../../service/team-service/index.js";
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
}
export default new TeamController();

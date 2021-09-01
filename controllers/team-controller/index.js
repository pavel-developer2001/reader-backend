import TeamService from "../../service/team-service/index.js";
import ApiError from "../../exceptions/api-error/index.js";

class TeamController {
  async getTeams(req, res) {
    try {
      const teams = await TeamService.getAllTeams();
      return res.json(teams);
    } catch (error) {}
  }
}
export default new TeamController();

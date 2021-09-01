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
}
export default new TeamService();

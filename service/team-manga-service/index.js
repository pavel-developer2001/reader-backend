import ApiError from "../../exceptions/api-error/index.js";
import { TeamMangaModel } from "../../models/team-manga-model/index.js";

class TeamMangaService {
  async addTeam(mangaId, teamId) {
    try {
      const candidate = await TeamMangaModel.findOne({
        where: { mangaId, teamId },
      });
      if (candidate) {
        return;
      }
      const team = await TeamMangaModel.create({ mangaId, teamId });
      return team;
    } catch (error) {}
  }
}
export default new TeamMangaService();

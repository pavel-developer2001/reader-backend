import ApiError from "../../exceptions/api-error/index.js";
import { TeamChapterModel } from "../../models/team-chapter-model/index.js";

class TeamChapterService {
  async addChapterForTeam(chapterId, mangaId, teamId) {
    try {
      const candidate = await TeamChapterModel.findOne({
        where: { chapterId, mangaId, teamId },
      });
      if (candidate) {
        return;
      }
      await TeamChapterModel.create({ chapterId, mangaId, teamId });
    } catch (error) {}
  }
}
export default new TeamChapterService();

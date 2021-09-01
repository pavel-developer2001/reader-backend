import ChapterService from "../../service/chapter-service/index.js";
import ApiError from "../../exceptions/api-error/index.js";

class ChapterController {
  async getChapters(req, res) {
    try {
      const chapters = await ChapterService.getAllChapters();
      return res.json(chapters);
    } catch (error) {}
  }
}
export default new ChapterController();

import ChapterService from "../../service/chapter-service/index.js";
import ApiError from "../../exceptions/api-error/index.js";
import CoverService from "../../service/cover-service/index.js";

class ChapterController {
  async getChapters(req, res) {
    try {
      const chapters = await ChapterService.getAllChapters();
      return res.json(chapters);
    } catch (error) {}
  }
  async addChapter(req, res) {
    try {
      const { numberChapter, valumeChapter, mangaId, userId } = req.body;
      const chapter = await ChapterService.newChapter(
        numberChapter,
        valumeChapter,
        mangaId,
        userId
      );
      const imagesList = req.file;
      await imagesList.forEach((image) => {
        CoverService.newImageForChapter(
          chapter.id,
          chapter.userId,
          chapter.mangaId,
          image
        );
      });
      return res.status(200).json(chapter);
    } catch (error) {}
  }
}
export default new ChapterController();

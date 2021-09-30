import ChapterService from "../../service/chapter-service/index.js";
import ApiError from "../../exceptions/api-error/index.js";
import CoverService from "../../service/cover-service/index.js";
import ImagesChapterService from "../../service/images-chapter-service/index.js";

class ChapterController {
  async getChapters(req, res) {
    try {
      const chapters = await ChapterService.getAllChapters();
      return res.json(chapters);
    } catch (error) {}
  }
  async addChapter(req, res) {
    try {
      const { numberChapter, volumeChapter, mangaId, userId } = req.body;
      const chapter = await ChapterService.newChapter(
        numberChapter,
        volumeChapter,
        mangaId,
        userId
      );
      const imagesList = req.files;
      await imagesList.map((image) => {
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
  async getAllChapterToManga(req, res) {
    try {
      const { id } = req.params;
      const chapters = await ChapterService.getChapters(id);
      res.status(200).json(chapters);
    } catch (error) {}
  }
  async getAllImagesForChapter(req, res) {
    try {
      const { id } = req.params;
      const images = await ImagesChapterService.getImages(id);
      res.status(200).json(images);
    } catch (error) {}
  }
  async getLaterChapterWithMangaData(req, res) {
    try {
      const chapters = await ChapterService.getLaterChapters();
      res.status(200).json(chapters);
    } catch (error) {}
  }
}
export default new ChapterController();

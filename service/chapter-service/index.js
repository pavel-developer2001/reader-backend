import { ChapterModel } from "../../models/chapter-model/index.js";

import ApiError from "../../exceptions/api-error/index.js";
import { MangaModel } from "../../models/manga-model/index.js";

class ChapterService {
  async getAllChapters() {
    try {
      const chapters = await ChapterModel.findAll();
      return chapters;
    } catch (error) {
      console.log(error);
    }
  }
  async newChapter(numberChapter, volumeChapter, mangaId, userId) {
    try {
      const addChapter = await ChapterModel.create({
        numberChapter,
        volumeChapter,
        mangaId,
        userId,
      });
      return addChapter;
    } catch (error) {}
  }
  async getChapters(id) {
    try {
      const chapters = await ChapterModel.findAll({ where: { mangaId: id } });
      return chapters;
    } catch (error) {}
  }
  async getLaterChapters() {
    try {
      const chapters = await ChapterModel.findAll({
        include: [{ model: MangaModel }],
      });
      return chapters;
    } catch (error) {}
  }
}
export default new ChapterService();

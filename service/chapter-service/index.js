import { ChapterModel } from "../../models/chapter-model/index.js";

import ApiError from "../../exceptions/api-error/index.js";

class ChapterService {
  async getAllChapters() {
    try {
      const chapters = await ChapterModel.findAll();
      return chapters;
    } catch (error) {
      console.log(error);
    }
  }
  async newChapter(numberChapter, valumeChapter, mangaId, userId) {
    try {
      const addChapter = await ChapterModel.create({
        numberChapter,
        valumeChapter,
        mangaId,
        userId,
      });
      return addChapter;
    } catch (error) {}
  }
}
export default new ChapterService();

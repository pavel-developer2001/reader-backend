import { ImagesChapterModel } from "../../models/images-chapter-model/index.js";

import ApiError from "../../exceptions/api-error/index.js";

class ImagesChapterService {
  async addImage(chapterId, userId, mangaId, imageChapter) {
    try {
      const addNewChapter = await ImagesChapterModel.create({
        imageChapter,
        chapterId,
        mangaId,
        userId,
      });
      return addNewChapter;
    } catch (error) {}
  }
}
export default new ImagesChapterService();

import { BookMarksModel } from "../../models/book-marks-model/index.js";
import { MangaModel } from "../../models/manga-model/index.js";
import ApiError from "../../exceptions/api-error/index.js";

class BookMarksService {
  async getAllMarks() {
    try {
      const marks = await BookMarksModel.findAll();
      return marks;
    } catch (error) {
      console.log(error);
    }
  }
  async createMarks(category, mangaId, userId) {
    try {
      const candidate = await BookMarksModel.findOne({
        where: { mangaId, userId },
      });
      if (candidate && category != "Удалить из закладок") {
        return candidate;
      }
      if (category == "Удалить из закладок") {
        await BookMarksModel.destroy({ where: { mangaId, userId } });
        return candidate;
      }
      const mark = await BookMarksModel.create({ category, mangaId, userId });
      return mark;
    } catch (error) {
      console.log("ERROR", error);
    }
  }
  async getMarks(id) {
    try {
      const marks = await BookMarksModel.findAll({
        where: { userId: id },
        include: [{ model: MangaModel }],
      });
      return marks;
    } catch (error) {}
  }
  async updateMark(category, mangaId, userId) {
    try {
      await BookMarksModel.update({ category }, { where: { mangaId, userId } });
      const mark = await BookMarksModel.findOne({ where: { mangaId, userId } });
      return mark;
    } catch (error) {}
  }
}
export default new BookMarksService();

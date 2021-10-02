import ApiError from "../../exceptions/api-error/index.js";
import BookMarksService from "../../service/book-marks-service/index.js";

class BookMarksController {
  async getBookMarks(req, res) {
    try {
      const bookMarks = await BookMarksService.getAllMarks();
      return res.json(bookMarks);
    } catch (error) {}
  }
  async addCreateMarksForUser(req, res) {
    try {
      const { category, mangaId, userId } = req.body;
      const mark = await BookMarksService.createMarks(
        category,
        mangaId,
        userId
      );
      res.status(200).json(mark);
    } catch (error) {}
  }
  async getAllMarksForUser(req, res) {
    const { id } = req.params;
    const marks = await BookMarksService.getMarks(id);
    return res.status(200).json(marks);
  }
  async updateMarkForManga(req, res) {
    const { category, mangaId, userId } = req.body;
    const mark = await BookMarksService.updateMark(category, mangaId, userId);
    res.status(200).json(mark);
  }
  async getBookMarkForManga(req, res) {
    try {
      const { id } = req.params;
      const { userId } = req.query;
      const mark = await BookMarksService.getMarkForManga(id, userId);
      res.status(200).json(mark);
    } catch (error) {}
  }
}
export default new BookMarksController();

import ApiError from "../../exceptions/api-error/index.js";
import BookMarksService from "../../service/book-marks-service/index.js";

class BookMarksController {
  async getBookMarks(req, res) {
    try {
      const bookMarks = await BookMarksService.getAllMarks();
      return res.json(bookMarks);
    } catch (error) {}
  }
}
export default new BookMarksController();

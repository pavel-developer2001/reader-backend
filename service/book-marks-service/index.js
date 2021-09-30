import { BookMarksModel } from "../../models/book-marks-model/index.js";
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
}
export default new BookMarksService();

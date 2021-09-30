import Router from "express";
import BookMarksController from "../../controllers/book-marks-controller/index.js";
const router = new Router();

router.get("/", BookMarksController.getBookMarks);

export { router };

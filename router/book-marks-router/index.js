import Router from "express";
import BookMarksController from "../../controllers/book-marks-controller/index.js";
const router = new Router();

router.get("/", BookMarksController.getBookMarks);
router.post("/add", BookMarksController.addCreateMarksForUser);
router.get("/:id", BookMarksController.getAllMarksForUser);
router.patch("/change", BookMarksController.updateMarkForManga);

export { router };

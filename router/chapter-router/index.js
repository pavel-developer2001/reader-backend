import Router from "express";
import ChapterController from "../../controllers/chapter-controller/index.js";
import { upload } from "../../utils/upload.js";

const router = new Router();

router.get("/", ChapterController.getChapters);
router.post(
  "/addChapter",
  upload.single("imagesList"),
  ChapterController.addChapter
);

export { router };

import Router from "express";
import ChapterController from "../../controllers/chapter-controller/index.js";
import { upload } from "../../utils/upload.js";

const router = new Router();

router.get("/", ChapterController.getLaterChapterWithMangaData);
router.post(
  "/addChapter",
  upload.array("imagesList[]"),
  ChapterController.addChapter
);
router.get("/:id", ChapterController.getAllChapterToManga);
router.get("/images/:id", ChapterController.getAllImagesForChapter);

export { router };

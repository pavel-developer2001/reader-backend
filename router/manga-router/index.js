import Router from "express";
import MangaController from "../../controllers/manga-controller/index.js";
import { upload } from "../../utils/upload.js";

const router = new Router();

router.get("/", MangaController.getMangas);
router.get("/:id", MangaController.getManga);
router.post(
  "/create",
  upload.single("mangaCover"),
  MangaController.createNewManga
);

export { router };

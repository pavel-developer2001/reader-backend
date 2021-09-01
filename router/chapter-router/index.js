import Router from "express";
import ChapterController from "../../controllers/chapter-controller/index.js";

const router = new Router();

router.get("/", ChapterController.getChapters);

export { router };

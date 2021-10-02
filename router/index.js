import Router from "express";
import { router as userRouter } from "./user-router/index.js";
import { router as mangaRouter } from "./manga-router/index.js";
import { router as teamRouter } from "./team-router/index.js";
import { router as chapterRouter } from "./chapter-router/index.js";
import { router as bookMarksRouter } from "./book-marks-router/index.js";
import { router as ratingMangaRouter } from "./rating-manga-router/index.js";
import { router as commentMangaRouter } from "./comment-manga-router/index.js";

const router = new Router();

router.use("/users", userRouter);
router.use("/mangas", mangaRouter);
router.use("/teams", teamRouter);
router.use("/chapters", chapterRouter);
router.use("/marks", bookMarksRouter);
router.use("/rating", ratingMangaRouter);
router.use("/comments", commentMangaRouter);

export default router;

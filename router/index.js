import Router from "express";
import { router as userRouter } from "./user-router/index.js";
import { router as mangaRouter } from "./manga-router/index.js";
import { router as teamRouter } from "./team-router/index.js";
import { router as chapterRouter } from "./chapter-router/index.js";

const router = new Router();

router.use("/users", userRouter);
router.use("/mangas", mangaRouter);
router.use("/teams", teamRouter);
router.use("/chapters", chapterRouter);

export default router;

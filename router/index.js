import Router from "express";
import { router as userRouter } from "./user-router/index.js";
import { router as mangaRouter } from "./manga-router/index.js";

const router = new Router();

router.use("/users", userRouter);
router.use("/mangas", mangaRouter);

export default router;

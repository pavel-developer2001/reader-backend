import Router from "express";
import { router as userRouter } from "./user-router/index.js";

const router = new Router();

router.use("/users", userRouter);

export default router;

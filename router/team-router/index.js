import Router from "express";
import TeamController from "../../controllers/team-controller/index.js";

const router = new Router();

router.get("/", TeamController.getTeams);

export { router };

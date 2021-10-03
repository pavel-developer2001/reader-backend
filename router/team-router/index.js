import Router from "express";
import TeamController from "../../controllers/team-controller/index.js";
import { upload } from "../../utils/upload.js";

const router = new Router();

router.get("/", TeamController.getTeams);
router.post("/add", upload.single("teamCover"), TeamController.createTeam);

export { router };

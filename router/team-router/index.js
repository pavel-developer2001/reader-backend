import Router from "express";
import TeamController from "../../controllers/team-controller/index.js";
import { upload } from "../../utils/upload.js";

const router = new Router();

router.get("/", TeamController.getTeams);
router.get("/:id", TeamController.getTeam);
router.get("/user/:id", TeamController.getAllTeamForUser);
router.post("/add", upload.single("teamCover"), TeamController.createTeam);
router.post("/manga/add", TeamController.addMangaForTeam);

export { router };

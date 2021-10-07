import Router from "express";
import TeamController from "../../controllers/team-controller/index.js";
import { upload } from "../../utils/upload.js";

const router = new Router();

router.get("/", TeamController.getTeams);
router.get("/:id", TeamController.getTeam);
router.get("/user/:id", TeamController.getAllTeamForUser);
router.post("/add", upload.single("teamCover"), TeamController.createTeam);
router.post("/manga/add", TeamController.addMangaForTeam);
router.get("/manga/:id", TeamController.getAllTeamsForManga);
router.post("/invitation/add", TeamController.invitationInTeamForUser);
router.get("/invitation/user/:id", TeamController.getAllInvitationsForUser);
router.post("/invitation/user/join", TeamController.agreeToJoinInTeam);
router.delete("/invitation/user/refusal/:id", TeamController.refusalToJoinTeam);
router.delete("/member/:id", TeamController.removeMemberFromTeam);

export { router };

import TeamService from "../../service/team-service/index.js";
import CoverService from "../../service/cover-service/index.js";
import TeamMangaService from "../../service/team-manga-service/index.js";
import TeamMemberService from "../../service/team-member-service/index.js";
import TeamInvitationService from "../../service/team-invitation-service/index.js";
import ApiError from "../../exceptions/api-error/index.js";

class TeamController {
  async getTeams(req, res) {
    try {
      const teams = await TeamService.getAllTeams();
      return res.json(teams);
    } catch (error) {}
  }
  async createTeam(req, res) {
    try {
      const { teamName, teamSubtitle, teamDescription, userId } = req.body;
      const team = await TeamService.addTeam(
        teamName,
        teamSubtitle,
        teamDescription,
        userId
      );
      const teamCover = req.file;
      await CoverService.uploadForTeam(team.id, teamCover);
      await TeamMemberService.addMemberForCreateTeam(team.id, team.userId);
      const foundTeam = await TeamService.getTeam(team.id);
      res.status(200).json(foundTeam);
    } catch (error) {}
  }
  async getTeam(req, res) {
    try {
      const { id } = req.params;
      const team = await TeamService.getTeamData(id);
      res.status(200).json(team);
    } catch (error) {}
  }
  async getAllTeamForUser(req, res) {
    try {
      const { id } = req.params;
      const teams = await TeamMemberService.getTeams(id);
      res.status(200).json(teams);
    } catch (error) {}
  }
  async addMangaForTeam(req, res) {
    try {
      const { mangaId, teamId } = req.body;
      const team = await TeamMangaService.addTeam(mangaId, teamId);
      res.status(200).json(team);
    } catch (error) {}
  }
  async getAllTeamsForManga(req, res) {
    try {
      const { id } = req.params;
      const teams = await TeamMangaService.getTeamsForManga(id);
      res.status(200).json(teams);
    } catch (error) {}
  }
  async invitationInTeamForUser(req, res) {
    try {
      const { rank, teamId, userId } = req.body;
      const invitation = await TeamInvitationService.invitationInTeam(
        rank,
        teamId,
        userId
      );
      res.status(200).json(invitation);
    } catch (error) {}
  }
  async getAllInvitationsForUser(req, res) {
    try {
      const { id } = req.params;
      const invitations = await TeamInvitationService.getInvitationsForUser(id);
      res.status(200).json(invitations);
    } catch (error) {}
  }
  async agreeToJoinInTeam(req, res) {
    try {
      const { invitationId, rank, teamId, userId } = req.body;
      const newMember = await TeamMemberService.joinToTeam(
        rank,
        teamId,
        userId
      );
      const deleteInvitation = await TeamInvitationService.removeInvitation(
        invitationId
      );
      res.status(200).json({ newMember, deleteInvitation });
    } catch (error) {}
  }
  async refusalToJoinTeam(req, res) {
    try {
      const { id } = req.params;
      const deleteInvitial = await TeamInvitationService.removeInvitation(id);
      res.status(200).json(deleteInvitial);
    } catch (error) {}
  }
  async removeMemberFromTeam(req, res) {
    try {
      const { id } = req.params;
      const member = await TeamMemberService.removeMember(id);
      res.status(200).json(member);
    } catch (error) {}
  }
}
export default new TeamController();

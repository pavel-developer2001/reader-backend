import ApiError from "../../exceptions/api-error/index.js";
import { TeamInvitationModel } from "../../models/team-invitation-model/index.js";
import { TeamModel } from "../../models/team-model/index.js";

class TeamInvitationService {
  async invitationInTeam(rank, teamId, userId) {
    try {
      const candidate = await TeamInvitationModel.findOne({
        where: { rank, teamId, userId },
      });
      if (candidate) {
        return;
      }
      const addInvitation = await TeamInvitationModel.create({
        rank,
        teamId,
        userId,
      });
      const invitation = await TeamInvitationModel.findOne({
        where: { id: addInvitation.id },
        include: [{ model: TeamModel }],
      });
      return invitation;
    } catch (error) {}
  }
  async getInvitationsForUser(id) {
    try {
      const invitaions = await TeamInvitationModel.findAll({
        where: { userId: id },
        include: [{ model: TeamModel }],
      });
      return invitaions;
    } catch (error) {}
  }
  async removeInvitation(invitationId) {
    try {
      const invitation = await TeamInvitationModel.findOne({
        where: { id: invitationId },
      });
      await TeamInvitationModel.destroy({ where: { id: invitationId } });
      return invitation;
    } catch (error) {}
  }
}
export default new TeamInvitationService();

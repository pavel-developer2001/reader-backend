import ApiError from "../../exceptions/api-error/index.js";
import { CommentMangaModel } from "../../models/comment-manga-model/index.js";
import { UserModel } from "../../models/user-model/index.js";

class CommentMangaService {
  async addComment(commentText, spoiler, mangaId, userId) {
    try {
      const addComment = await CommentMangaModel.create({
        commentText,
        spoiler,
        mangaId,
        userId,
      });
      const comment = await CommentMangaModel.findOne({
        where: { id: addComment.id },
        include: [{ model: UserModel }],
      });
      return comment;
    } catch (error) {}
  }
  async getComments(id) {
    try {
      const comments = await CommentMangaModel.findAll({
        where: { mangaId: id },
        include: [{ model: UserModel }],
        order: [["id", "DESC"]],
      });
      return comments;
    } catch (error) {}
  }
  async updateComment(id, commentText, spoiler) {
    try {
      await CommentMangaModel.update(
        { commentText, spoiler },
        { where: { id } }
      );
      const comment = await CommentMangaModel.findOne({ where: { id } });
      return comment;
    } catch (error) {}
  }
  async removeComment(id) {
    const comment = await CommentMangaModel.findOne({ where: { id } });
    await CommentMangaModel.destroy({ where: { id } });
    return comment;
  }
}
export default new CommentMangaService();

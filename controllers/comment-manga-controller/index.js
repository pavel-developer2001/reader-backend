import CommentMangaService from "../../service/comment-manga-service/index.js";
import ApiError from "../../exceptions/api-error/index.js";

class CommentMangaController {
  async addCommentForManga(req, res) {
    try {
      const { commentText, spoiler, mangaId, userId } = req.body;
      const comment = await CommentMangaService.addComment(
        commentText,
        spoiler,
        mangaId,
        userId
      );
      res.status(200).json(comment);
    } catch (error) {}
  }
  async getCommentsForManga(req, res) {
    try {
      const { id } = req.params;
      const comments = await CommentMangaService.getComments(id);
      res.status(200).json(comments);
    } catch (error) {}
  }
  async updateCommentForManga(req, res) {
    try {
      const { commentText, spoiler } = req.body;
      const { id } = req.params;
      const comment = await CommentMangaService.updateComment(
        id,
        commentText,
        spoiler
      );
      res.status(200).json(comment);
    } catch (error) {}
  }
  async removeCommentForManga(req, res) {
    const { id } = req.params;
    const comment = await CommentMangaService.removeComment(id);
    res.status(200).json(comment);
  }
}
export default new CommentMangaController();

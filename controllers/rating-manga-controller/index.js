import RatingMangaService from "../../service/rating-manga-service/index.js";
import ApiError from "../../exceptions/api-error/index.js";

class RatingMangaController {
  async getRatings(req, res) {
    try {
      const rating = await RatingMangaService.getRatings();
      return res.json(rating);
    } catch (error) {}
  }
  async createRatingForMangaUser(req, res) {
    try {
      const { rating, mangaId, userId } = req.body;
      const newRating = await RatingMangaService.createRating(
        rating,
        mangaId,
        userId
      );
      res.status(200).json(newRating);
    } catch (error) {}
  }
  async updateRatingForMangaUser(req, res) {
    try {
      const { rating, mangaId, userId } = req.body;
      const updateRatingUser = await RatingMangaService.updateRating(
        rating,
        mangaId,
        userId
      );
      res.status(200).json(updateRatingUser);
    } catch (error) {}
  }
  async findRating(req, res) {
    try {
      const { id } = req.params;
      const { userId } = req.query;
      const find = await RatingMangaService.findRatingForUser(id, userId);
      res.status(200).json(find);
    } catch (error) {}
  }
}
export default new RatingMangaController();

import { RatingMangaModel } from "../../models/rating-manga-model/index.js";

import ApiError from "../../exceptions/api-error/index.js";

class RatingMangaService {
  async getRatings() {
    try {
      const rating = await RatingMangaModel.findAll();
      return rating;
    } catch (error) {
      console.log(error);
    }
  }
  async createRating(rating, mangaId, userId) {
    try {
      const candidate = await RatingMangaModel.findOne({
        where: { mangaId, userId },
      });
      if (candidate) {
        return candidate;
      }
      const newRating = await RatingMangaModel.create({
        rating,
        mangaId,
        userId,
      });
      return newRating;
    } catch (error) {}
  }
  async updateRating(rating, mangaId, userId) {
    try {
      await RatingMangaModel.update({ rating }, { where: { mangaId, userId } });
      const foundRating = await RatingMangaModel.findOne({
        where: { mangaId, userId },
      });
      return foundRating;
    } catch (error) {
      console.log("ERROR", error);
    }
  }
  async findRatingForUser(id, userId) {
    try {
      const ratingUser = await RatingMangaModel.findOne({
        where: { mangaId: id, userId },
      });
      return ratingUser;
    } catch (error) {}
  }
}
export default new RatingMangaService();

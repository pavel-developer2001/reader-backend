import ApiError from "../../exceptions/api-error/index.js";
import { GenresModel } from "../../models/genres-model/index.js";

class GenresService {
  async addGenresForManga(genre, mangaId) {
    try {
      const newGenre = await GenresModel.create({ genre, mangaId });
      return newGenre;
    } catch (error) {
      console.log(error);
    }
  }
}
export default new GenresService();

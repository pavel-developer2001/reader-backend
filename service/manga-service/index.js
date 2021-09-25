import { MangaModel } from "../../models/manga-model/index.js";

import ApiError from "../../exceptions/api-error/index.js";

class MangaService {
  async getAllMangas() {
    try {
      const mangas = await MangaModel.findAll();
      return mangas;
    } catch (error) {
      console.log(error);
    }
  }
  async createManga(
    title,
    englishTitle,
    originalTitle,
    mangaDescription,
    yearOfIssue,
    userId
  ) {
    try {
      const candidate = await MangaModel.findOne({ where: { title: title } });
      if (candidate) {
        throw ApiError.BadRequest(`Манга с названием ${title} уже существует`);
      }
      const newManga = await MangaModel.create({
        title,
        englishTitle,
        originalTitle,
        mangaDescription,
        yearOfIssue,
        userId,
      });
      return newManga;
    } catch (error) {}
  }
  async addCover(id, mangaCover) {
    try {
      if (!mangaCover) {
        return null;
      }
      await MangaModel.update({ mangaCover }, { where: { id } });
    } catch (error) {
      console.log("ERROR ", error);
    }
  }
  async getManga(id) {
    try {
      const manga = await MangaModel.findOne({ where: { id } });
      return manga;
    } catch (error) {}
  }
}
export default new MangaService();

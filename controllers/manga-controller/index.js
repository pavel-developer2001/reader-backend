import MangaService from "../../service/manga-service/index.js";
import ApiError from "../../exceptions/api-error/index.js";
import CoverService from "../../service/cover-service/index.js";

class MangaController {
  async getMangas(req, res) {
    try {
      const mangas = await MangaService.getAllMangas();
      return res.json(mangas);
    } catch (error) {}
  }
  async createNewManga(req, res) {
    try {
      const {
        title,
        englishTitle,
        originalTitle,
        mangaDescription,
        yearOfIssue,
        userId,
      } = req.body;
      const mangaData = await MangaService.createManga(
        title,
        englishTitle,
        originalTitle,
        mangaDescription,
        yearOfIssue,
        userId
      );
      const mangaCover = req.file;
      await CoverService.upload(mangaData.id, mangaCover);
      const findNewManga = await MangaService.getManga(mangaData.id);
      return res.json(findNewManga);
    } catch (error) {}
  }
}
export default new MangaController();

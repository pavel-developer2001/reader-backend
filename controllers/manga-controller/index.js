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
      const { title, foreignTitle, mangaDescription, yearOfIssue, userId } =
        req.body;
      const mangaData = await MangaService.createManga(
        title,
        foreignTitle,
        mangaDescription,
        yearOfIssue,
        userId
      );
      const mangaCover = req.file;
      const coverData = await CoverService.upload(mangaCover);
      return res.json(mangaData, coverData);
    } catch (error) {}
  }
}
export default new MangaController();

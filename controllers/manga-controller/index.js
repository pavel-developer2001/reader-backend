import MangaService from "../../service/manga-service/index.js";
import ApiError from "../../exceptions/api-error/index.js";
import CoverService from "../../service/cover-service/index.js";
import GenresService from "../../service/genres-service/index.js";
import TagsService from "../../service/tags-service/index.js";
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
        typeManga,
        statusManga,
        ageRatingManga,
        genres,
        tags,
        yearOfIssue,
        userId,
      } = req.body;
      const mangaData = await MangaService.createManga(
        title,
        englishTitle,
        originalTitle,
        mangaDescription,
        typeManga,
        statusManga,
        ageRatingManga,
        yearOfIssue,
        userId
      );
      await genres.map((genre) =>
        GenresService.addGenresForManga(genre, mangaData.id)
      );
      await tags.map((tag) => TagsService.addTagsForManga(tag, mangaData.id));
      const mangaCover = req.file;
      await CoverService.upload(mangaData.id, mangaCover);
      const findNewManga = await MangaService.getManga(mangaData.id);
      return res.json(findNewManga);
    } catch (error) {}
  }
  async getManga(req, res) {
    try {
      const { id } = req.params;
      const manga = await MangaService.getManga(id);
      const genre = await GenresService.getAllGenresForManga(id);
      const tag = await TagsService.getTagsForManga(id);
      res.json({ manga, genre, tag });
    } catch (error) {}
  }
}
export default new MangaController();

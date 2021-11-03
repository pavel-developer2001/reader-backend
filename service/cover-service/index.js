import cloudinary from "../../core/cloudinary.js";
import ImagesChapterService from "../images-chapter-service/index.js";
import MangaService from "../manga-service/index.js";
import TeamService from "../team-service/index.js";
class CoverService {
  async upload(id, mangaCover) {
    cloudinary.v2.uploader
      .upload_stream({ resource_type: "auto" }, (error, result) => {
        if (error || !result) {
          console.log("ERRRRRRRRRROOOOOOOOORR COVER", error);
        }
        MangaService.addCover(id, result.url);
      })
      .end(mangaCover.buffer);
  }
  async newImageForChapter(chapterId, userId, mangaId, image) {
    cloudinary.v2.uploader
      .upload_stream({ resource_type: "auto" }, (error, result) => {
        if (error || !result) {
          console.log("ERRRRRRRRRROOOOOOOOORR COVER", error);
        }
        ImagesChapterService.addImage(chapterId, userId, mangaId, result.url);
      })
      .end(image.buffer);
  }
  async uploadForTeam(id, teamCover) {
    cloudinary.v2.uploader
      .upload_stream({ resource_type: "auto" }, (error, result) => {
        if (error || !result) {
          console.log("ERRRRRRRRRROOOOOOOOORR COVER", error);
        }
        TeamService.addCover(id, result.url);
      })
      .end(teamCover.buffer);
  }
}

export default new CoverService();

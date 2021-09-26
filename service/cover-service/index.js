import cloudinary from "../../core/cloudinary.js";
import ImagesChapterService from "../images-chapter-service/index.js";
import MangaService from "../manga-service/index.js";
class CoverService {
  async upload(id, mangaCover) {
    await cloudinary.v2.uploader
      .upload_stream({ resource_type: "auto" }, (error, result) => {
        if (error || !result) {
          console.log("ERRRRRRRRRROOOOOOOOORR COVER", error);
          //   return res.status(500).json({
          //     status: "error",
          //     message: error || "upload error",
          //   });
        }

        MangaService.addCover(id, result.url);
        // res.status(201).json({
        //   url: result.url,
        //   size: Math.round(result.bytes / 1024),
        //   height: result.height,
        //   width: result.width,
        // });
      })
      .end(mangaCover.buffer);

    //   .end(file.buffer);
  }
  async newImageForChapter(chapterId, userId, mangaId, image) {
    await cloudinary.v2.uploader
      .upload_stream({ resource_type: "auto" }, (error, result) => {
        if (error || !result) {
          console.log("ERRRRRRRRRROOOOOOOOORR COVER", error);
        }
        ImagesChapterService.addImage(chapterId, userId, mangaId, result.url);
      })
      .end(image.buffer);
  }
}

export default new CoverService();

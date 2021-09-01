import cloudinary from "../../core/cloudinary.js";

class CoverService {
  async upload(mangaCover) {
    // const file = req.file;

    cloudinary.v2.uploader
      .upload_stream({ resource_type: "auto" }, (error, result) => {
        console.log(error, result);
        if (error || !result) {
          console.log("ERRRRRRRRRROOOOOOOOORR COVER", error);
          //   return res.status(500).json({
          //     status: "error",
          //     message: error || "upload error",
          //   });
        }
        return result;
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
}

export default new CoverService();

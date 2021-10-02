import ApiError from "../../exceptions/api-error/index.js";
import { TagsModel } from "../../models/tags-model/index.js";

class TagsService {
  async addTagsForManga(tag, mangaId) {
    try {
      const newTag = await TagsModel.create({ tag, mangaId });
      return newTag;
    } catch (error) {
      console.log(error);
    }
  }
}
export default new TagsService();

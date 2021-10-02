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
  async getTagsForManga(id) {
    try {
      const tags = await TagsModel.findAll({ where: { mangaId: id } });
      return tags;
    } catch (error) {}
  }
}
export default new TagsService();

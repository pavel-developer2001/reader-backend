import Router from "express";
import CommentMangaController from "../../controllers/comment-manga-controller/index.js";

const router = new Router();

router.post("/add", CommentMangaController.addCommentForManga);
router.get("/:id", CommentMangaController.getCommentsForManga);
router.patch("/update/:id", CommentMangaController.updateCommentForManga);
router.delete("/:id", CommentMangaController.removeCommentForManga);

export { router };

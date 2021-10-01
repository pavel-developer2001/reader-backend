import Router from "express";
import RatingMangaController from "../../controllers/rating-manga-controller/index.js";

const router = new Router();

router.get("/", RatingMangaController.getRatings);
router.get("/:id", RatingMangaController.findRating);
router.post("/add", RatingMangaController.createRatingForMangaUser);
router.patch("/update", RatingMangaController.updateRatingForMangaUser);

export { router };

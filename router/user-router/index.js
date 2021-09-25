import Router from "express";
import UserController from "../../controllers/user-controller/index.js";
import { body } from "express-validator";

const router = new Router();

router.get("/", UserController.getUsers);
router.get("/:id", UserController.getUser);
router.post(
  "/registration",
  body("name").isString(),
  body("email").isEmail(),
  body("password").isLength({ min: 3, max: 32 }),
  UserController.registration
);
router.post(
  "/login",
  body("email").isEmail(),
  body("password").isLength({ min: 3, max: 32 }),
  UserController.login
);

export { router };

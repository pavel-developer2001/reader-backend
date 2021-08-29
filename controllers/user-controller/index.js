import UserService from "../../service/user-service/index.js";
import { validationResult } from "express-validator";
import ApiError from "../../exceptions/api-error/index.js";
class UserController {
  async getUsers(req, res) {
    try {
      const users = await UserService.getAllUsers();
      return res.json(users);
    } catch (error) {}
  }
  async registration(req, res, next) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next(
          ApiError.BadRequest("Ошибка при валидации", errors.array())
        );
      }
      const { name, email, password } = req.body;
      const userData = await UserService.registration(name, email, password);

      return res.json(userData);
    } catch (error) {}
  }
  async login(req, res, next) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next(
          ApiError.BadRequest("Ошибка при валидации", errors.array())
        );
      }
      const { email, password } = req.body;
      const userData = await UserService.login(email, password);
      return res.json(userData);
    } catch (error) {}
  }
}
export default new UserController();

import { UserModel } from "../../models/user-model/index.js";
import bcrypt from "bcrypt";
import { generateJwt } from "../../utils/generateJWT.js";
import UserDto from "../../dto/user-dto/index.js";
import ApiError from "../../exceptions/api-error/index.js";

class UserService {
  async getAllUsers() {
    try {
      const users = await UserModel.findAll();
      return users;
    } catch (error) {
      console.log(error);
    }
  }
  async registration(name, email, password) {
    try {
      const candidate = await UserModel.findOne({ where: { email: email } });
      if (candidate) {
        throw ApiError.BadRequest(
          `Пользователь с почтовым адресом ${email} уже существует`
        );
      }
      const hashPassword = await bcrypt.hash(password, 5);
      const newUser = new UserModel({
        name: name,
        email: email,
        password: hashPassword,
      });
      await newUser.save();
      const userDto = new UserDto(newUser);

      const token = generateJwt(userDto);
      return { token, user: userDto };
    } catch (error) {}
  }
  async login(email, password) {
    try {
      const findUser = await UserModel.findOne({ where: { email: email } });
      if (!findUser) {
        throw ApiError.BadRequest("Пользователь с таким email не найден");
      }
      const isMatch = await bcrypt.compare(password, findUser.password);
      if (!isMatch) {
        throw ApiError.BadRequest("Неверный пароль");
      }
      const userDto = new UserDto(findUser);
      const token = generateJwt(userDto);
      return { token, user: userDto };
    } catch (error) {}
  }
}
export default new UserService();

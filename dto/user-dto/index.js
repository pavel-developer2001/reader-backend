class UserDto {
  id;
  email;
  name;
  avatar;
  constructor(model) {
    this.id = model.id;
    this.email = model.email;
    this.name = model.name;
    this.avatar = model.avatar;
  }
}
export default UserDto;

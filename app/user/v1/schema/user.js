
export default class User extends sans.class.classer.schema
{
  static #_ini = undefined;

  #_data = {
    id: 1,
    name: "user",
    username: "username",
    email: "user@example.com",
    phone_number: "6281234567890",
    profile: "image.png"
  }

  constructor()
  {
    super();
    super.data = this.#_data;
  }

  static setup()
  {
    if (!this.#_ini) {
      this.#_ini = new User();
    }
    return this.#_ini;
  }
}
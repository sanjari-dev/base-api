

export default class R_200
{
  static #_ini = undefined;

  #_example = undefined;

  constructor()
  {
    const _ = sans.app().class;
    const data = {
      user: _.schema.user.get(),
      roles: _.schema.role.list(),
      token : "secret_token_user"
    };
    const message = "success verification";
    this.#_example =  {
      "success": {
        "value": sans.helpers.response.success(data, message)
      }
    }
  }

  static setup()
  {
    if (!this.#_ini) {
      this.#_ini = new R_200();
    }
    return this.#_ini;
  }

  get examples(){return this.#_example};

}
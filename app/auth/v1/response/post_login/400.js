

export default class R_400
{
  static #_ini = undefined;

  #_example = undefined;

  constructor()
  {
    this.#_example =  {
      "empty email": {
        "value": sans.helpers.response.errorBadRequest("username or email is required")
      },
      "empty password": {
        "value": sans.helpers.response.errorBadRequest("password is required")
      },
      "empty username": {
        "value": sans.helpers.response.errorBadRequest("username or email is required")
      }
    }
  }

  static setup()
  {
    if (!this.#_ini) {
      this.#_ini = new R_400();
    }
    return this.#_ini;
  }

  get examples(){return this.#_example};

}
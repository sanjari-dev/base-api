

export default class Account extends sans.class.classer.repository
{
  static #_ini = undefined;

  #_model = db.user.account;

  constructor()
  {
    super();
    super.model = this.#_model;
  }

  static setup()
  {
    if (!this.#_ini) {
      this.#_ini = new Account();
    }
    return this.#_ini;
  }
}
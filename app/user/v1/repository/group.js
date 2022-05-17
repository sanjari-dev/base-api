

export default class Group extends sans.class.classer.repository
{
  static #_ini = undefined;

  #_model = db.user.group;

  constructor()
  {
    super();
    super.model = this.#_model;
  }

  static setup()
  {
    if (!this.#_ini) {
      this.#_ini = new Group();
    }
    return this.#_ini;
  }
}
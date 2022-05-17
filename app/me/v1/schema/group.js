
export default class Role extends sans.class.classer.schema
{
  static #_ini = undefined;

  #_data = {
    id: 1,
    name: "admin",
    description: "administrator",
    count: 1,
  }

  constructor()
  {
    super();
    super.data = this.#_data;
  }

  static setup()
  {
    if (!this.#_ini) {
      this.#_ini = new Role();
    }
    return this.#_ini;
  }
}
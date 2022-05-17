
export default class Role extends sans.class.classer.schema
{
  static #_ini = undefined;

  #_data = {
    id: 1,
    name: "Admin",
    description: "this is description",
    count: 1,
    is_default: true
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

export default class Permission extends sans.class.classer.schema
{
  static #_ini = undefined;

  #_data = {
    id: 1,
    name: "Permission Name",
    display: "permission-name",
    description: "",
  }

  constructor()
  {
    super();
    super.data = this.#_data;
  }

  static setup()
  {
    if (!this.#_ini) {
      this.#_ini = new Permission();
    }
    return this.#_ini;
  }
}
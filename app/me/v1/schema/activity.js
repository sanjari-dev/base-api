
export default class Activity extends sans.class.classer.schema
{
  static #_ini = undefined;

  #_data = {
    id: 1,
    account_id: 1,
    name: "Activity Name",
    description: "",
    time: (new Date()).getTime(),
    type: "access app",
    data: "[]",
  }

  constructor()
  {
    super();
    super.data = this.#_data;
  }

  static setup()
  {
    if (!this.#_ini) {
      this.#_ini = new Activity();
    }
    return this.#_ini;
  }
}
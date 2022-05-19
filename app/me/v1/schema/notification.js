
export default class Notification extends sans.class.classer.schema
{
  static #_ini = undefined;

  #_data = {
    id: 1,
    account_id: 1,
    title: "Notification Title",
    is_read: (new Date()).getTime() + 1000 * 60 * 60,
    description: "",
    type: "info",
    link_path: "url",
    link_params: "{}",
  }

  constructor()
  {
    super();
    super.data = this.#_data;
  }

  static setup()
  {
    if (!this.#_ini) {
      this.#_ini = new Notification();
    }
    return this.#_ini;
  }
}
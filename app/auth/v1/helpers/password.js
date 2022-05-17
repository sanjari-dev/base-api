

export default class H_Password
{
  static #_ini = undefined;
  constructor()
  {}

  compare(password, user)
  {
    let compare = false;
    if (typeof password === "string" && user) {
      if (user.id && user.password) {
        let secret = sans.helpers.sanari.sha(`${user.id}-${password}`);
        compare = (secret === user.password);
      }
    }
    return compare;
  }

  static setup()
  {
    if (!this.#_ini) {
      this.#_ini = new H_Password();
    }
    return this.#_ini;
  }
}


export default class JWT
{
  static #_ini = undefined;

  #_secret_key = "3ac6adca4a77ed7f393d885dd03d7ea9d1766304";
  #_jwtExpiration = 3600 * 24 * 365;

  constructor()
  {}

  static setup()
  {
    if (!this.#_ini) {
      this.#_ini = new JWT();
    }
    return this.#_ini;
  }

  get secret_key(){return this.#_secret_key};
  get jwtExpiration(){return this.#_jwtExpiration};
}
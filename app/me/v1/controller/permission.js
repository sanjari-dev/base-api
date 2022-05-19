

export default class Permission extends sans.class.classer.controller
{
  static #_ini = undefined;
  
  constructor()
  {
    super();
    this.#docs();
  }

  #docs()
  {
    this.security = {
      "get": [
        { 
          "access_token": [],
          "token": []
        }
      ]
    }

  }

  static setup()
  {
    if (!this.#_ini) {
      this.#_ini = new Permission();
    }
    return this.#_ini;
  }
}
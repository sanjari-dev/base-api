

export default class Notification extends sans.class.classer.controller
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
      this.#_ini = new Notification();
    }
    return this.#_ini;
  }
}
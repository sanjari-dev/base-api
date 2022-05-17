

export default class R_401
{
  static #_ini = undefined;

  #_example = undefined;

  constructor()
  {
    this.#_example =  {
      "wrong otp code": {
        "value": sans.helpers.response.errorNotAuth("otp code doesn't match")
      }
    }
  }

  static setup()
  {
    if (!this.#_ini) {
      this.#_ini = new R_401();
    }
    return this.#_ini;
  }
  
  get examples(){return this.#_example};

}
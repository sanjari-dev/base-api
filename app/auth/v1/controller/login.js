

export default class Login extends sans.class.classer.controller
{
  static #_ini = undefined;
  
  constructor()
  {
    super();
    this.request_body = {
      "post": {
        "email": {
          "type": "string",
          "format": "email"
        },
        "username": {
          "type": "string",
          "example": "username"
        },
        "password": {
          "type": "string",
          "example": "password"
        }
      }
    }
    this.security = {
      "post": [
        { 
          "access_token": []
        }
      ]
    }
  }

  store(req, res, next)
  {
    const _ = sans.app().class;
    let middleware = [
      sans.middleware.headers.x_access_token,
      _.middleware.login.store_validate,
      _.middleware.login.store
    ]
    return sans.helpers.middleware.run(middleware, next);
  }

  static setup()
  {
    if (!this.#_ini) {
      this.#_ini = new Login();
    }
    return this.#_ini;
  }
}
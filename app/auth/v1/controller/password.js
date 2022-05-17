

export default class Login extends sans.class.classer.controller
{
  static #_ini = undefined;
  
  constructor()
  {
    super();
    this.request_body = {
      "patch": {
        "password": {
          "type": "string",
          "example": "password"
        },
        "new_password": {
          "type": "string",
          "example": "password"
        }
      },
      "post": {
        "new_password": {
          "type": "string",
          "example": "password"
        }
      }
    }
    this.security = {
      "patch": [
        { 
          "access_token": [],
          "token": []
        }
      ],
      "post": [
        { 
          "access_token": [],
          "token": []
        }
      ]
    }
  }

  store(req, res, next)
  {
    const _ = sans.app().class;
    let middleware = [
      sans.middleware.headers.x_access_token,
      sans.middleware.headers.token,
      _.middleware.password.store_validate,
      _.middleware.password.store
    ]
    return sans.helpers.middleware.run(middleware, next);
  }

  change(req, res, next)
  {
    const _ = sans.app().class;
    let middleware = [
      sans.middleware.headers.x_access_token,
      sans.middleware.headers.token,
      _.middleware.password.change_validate,
      _.middleware.password.change
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


export default class Profile extends sans.class.classer.controller
{
  static #_ini = undefined;
  
  constructor()
  {
    super();
    this.#docs();
  }

  index(req, res, next)
  {
    const _ = sans.app().class;
    let middleware = [
      sans.middleware.headers.x_access_token,
      sans.middleware.headers.token,
      _.middleware.profile.index
    ]
    return sans.helpers.middleware.run(middleware, next);
  }

  edit(req, res, next)
  {
    const _ = sans.app().class;
    let middleware = [
      sans.middleware.headers.x_access_token,
      sans.middleware.headers.token,
      _.middleware.profile.edit
    ]
    return sans.helpers.middleware.run(middleware, next);
  }

  #docs()
  {

    this.request_body = {
      "put": {
        "name": {
          "type": "string",
          "example": "user"
        },
        "username": {
          "type": "string",
          "example": "username"
        },
        "email": {
          "type": "string",
          "format": "email"
        },
        "phone_number": {
          "type": "string",
          "example": "6281234567890"
        },
        "image": {
          "type": "string",
          "example": "image.png"
        }
      }
    }
    this.security = {
      "get": [
        { 
          "access_token": [],
          "token": []
        }
      ],
      "put": [
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
      this.#_ini = new Profile();
    }
    return this.#_ini;
  }
}
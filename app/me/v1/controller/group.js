

export default class Group extends sans.class.classer.controller
{
  static #_ini = undefined;
  
  constructor()
  {
    super();
    this.security = {
      "get": [
        { 
          "access_token": [],
          "token": []
        }
      ],
      "get_id": [
        { 
          "access_token": [],
          "token": []
        }
      ]
    }
  }

  index(req, res, next)
  {
    const _ = sans.app().class;
    let middleware = [
      sans.middleware.headers.x_access_token,
      sans.middleware.headers.token,
      _.middleware.group.index
    ]
    return sans.helpers.middleware.run(middleware, next);
  }

  show(req, res, next)
  {
    const _ = sans.app().class;
    let middleware = [
      sans.middleware.headers.x_access_token,
      sans.middleware.headers.token,
      _.middleware.group.index
    ]
    return sans.helpers.middleware.run(middleware, next);
  }

  static setup()
  {
    if (!this.#_ini) {
      this.#_ini = new Group();
    }
    return this.#_ini;
  }
}
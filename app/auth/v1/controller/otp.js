

export default class Login extends sans.class.classer.controller
{
  static #_ini = undefined;
  
  constructor()
  {
    super();
    this.request_query = {
      "get": [
        {
          "in": "query",
          "name": "email",
          "schema": {
            "type": "string",
            "format": "email",
            "example": "user@example.com"
          },
          "required": true
        }
      ]
    }
    this.request_body = {
      "post": {
        "email": {
          "type": "string",
          "format": "email"
        },
        "otp": {
          "type": "string",
          "example": "321456"
        }
      }
    }
    this.security = {
      "get": [
        { 
          "access_token": []
        }
      ],
      "post": [
        { 
          "access_token": []
        }
      ]
    }
  }

  static setup()
  {
    if (!this.#_ini) {
      this.#_ini = new Login();
    }
    return this.#_ini;
  }
}
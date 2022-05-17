

export default class Account extends sans.class.classer.controller
{
  static #_ini = undefined;

  constructor()
  {
    const _ = sans.app().class;

    super();
    super.repository = _.repository.account;
    super.schema = {
      "index" : _.schema.user,
      "store": {
        "adder": _.schema.user,
        "show": _.schema.user
      }
    };

    this.#setup_docs();
  }

  static setup()
  {
    if (!this.#_ini) {
      this.#_ini = new Account();
    }
    return this.#_ini;
  }

  #setup_docs()
  {
    const parameter = super.parameter;
    this.request_query = {
      "index_account": [
        ...parameter
      ]
    }
    this.request_body = {
      "store_account": {
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
      "index_account": [
        { 
          "access_token": [],
          "token": []
        }
      ],
      "store_account": [
        { 
          "access_token": [],
          "token": []
        }
      ],
      "edit_account": [
        { 
          "access_token": [],
          "token": []
        }
      ],
      "change_account": [
        { 
          "access_token": [],
          "token": []
        }
      ],
      "remove_account": [
        { 
          "access_token": [],
          "token": []
        }
      ],
      "show_account": [
        { 
          "access_token": [],
          "token": []
        }
      ],
      "create_account": [
        { 
          "access_token": [],
          "token": []
        }
      ],
      "update_account": [
        { 
          "access_token": [],
          "token": []
        }
      ],
      "alter_account": [
        { 
          "access_token": [],
          "token": []
        }
      ],
      "destroy_account": [
        { 
          "access_token": [],
          "token": []
        }
      ]
    }
  }
}
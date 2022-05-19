

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
      "store": _.schema.user
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
        "password": {
          "type": "string",
          "example": "password"
        },
        "email": {
          "type": "string",
          "format": "email"
        },
        "phone_number": {
          "type": "string",
          "example": "6281234567890"
        },
        "profile": {
          "type": "string",
          "example": "image.png"
        },
        "birthday": {
          "type": "integer",
          "example": (new Date()).getTime()
        },
        "group_id": {
          "type": "integer",
          "example": 1
        },
        "menu_id": {
          "type": "integer",
          "example": 1
        },
        "employee_role_id": {
          "type": "integer",
          "example": 1
        },
        "employee_status_id": {
          "type": "integer",
          "example": 1
        },
        "employee_grade_id": {
          "type": "integer",
          "example": 1
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


export default class Group extends sans.class.classer.controller
{
  static #_ini = undefined;

  constructor()
  {
    const _ = sans.app().class;
    
    super();
    super.repository = _.repository.group;
    super.schema = {
      "index" : _.schema.group
    };

    this.#setup_docs();
  }

  static setup()
  {
    if (!this.#_ini) {
      this.#_ini = new Group();
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
      "index_group": [
        { 
          "access_token": [],
          "token": []
        }
      ],
      "store_group": [
        { 
          "access_token": [],
          "token": []
        }
      ],
      "edit_group": [
        { 
          "access_token": [],
          "token": []
        }
      ],
      "change_group": [
        { 
          "access_token": [],
          "token": []
        }
      ],
      "remove_group": [
        { 
          "access_token": [],
          "token": []
        }
      ],
      "show_group": [
        { 
          "access_token": [],
          "token": []
        }
      ],
      "create_group": [
        { 
          "access_token": [],
          "token": []
        }
      ],
      "update_group": [
        { 
          "access_token": [],
          "token": []
        }
      ],
      "alter_group": [
        { 
          "access_token": [],
          "token": []
        }
      ],
      "destroy_group": [
        { 
          "access_token": [],
          "token": []
        }
      ]
    }
  }
}


export default class M_Profile
{
  static #_ini = undefined;

  constructor()
  {}

  async edit(req, res, next)
  {
    const _ = sans.app().class;
    const response = sans.helpers.response;
    try {
      
      // get all group in account
      let user_groups = await db.user.user_group.get(
        {
          where: {
            account_id: req.user.id
          }
        }
      );
      let roles = [];
      user_groups.forEach(x => {
        roles.push(
          {
            id: x.group.id,
            name: x.group.name,
            description: x.group.description,
            count: x.group.count,
            is_default: x.is_default
          }
        )
      });

      await db.user.account.update(
        {
          name: req.body.name,
          username: req.body.username,
          email: req.body.email,
          phone_number: req.body.phone_number,
          profile: req.body.image
        },
        {
          where: {
            id: req.user.id
          }
        }
      );

      const account = await db.user.account.findByPk(req.user.id);

      const data = {
        user: _.schema.user.get(account),
        roles: _.schema.role.list(roles)
      };
      return response.success(data, "profile changed successfully");
    } 
    
    // handle error code
    catch (err) {
      return response.errorServer(err);
    }
  }

  async index(req, res, next)
  {
    const _ = sans.app().class;
    const response = sans.helpers.response;
    try {
      
      const account = await db.user.account.findByPk(req.user.id);
      
      // get all group in account
      let user_groups = await db.user.user_group.get(
        {
          where: {
            account_id: account.id
          }
        }
      );
      let roles = [];
      user_groups.forEach(x => {
        roles.push(
          {
            id: x.group.id,
            name: x.group.name,
            description: x.group.description,
            count: x.group.count,
            is_default: x.is_default
          }
        )
      });

      const data = {
        user: _.schema.user.get(account),
        roles: _.schema.role.list(roles)
      };
      return response.success(data, "user");
    } 
    
    // handle error code
    catch (err) {
      return response.errorServer(err);
    }
  }

  static setup()
  {
    if (!this.#_ini) {
      this.#_ini = new M_Profile();
    }
    return this.#_ini;
  }
}
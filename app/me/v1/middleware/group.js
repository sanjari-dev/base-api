

export default class M_Profile
{
  static #_ini = undefined;

  constructor()
  {}

  async index(req, res, next)
  {
    const _ = sans.app().class;
    const response = sans.helpers.response;
    try {
      const where = {
        account_id: req.user.id
      };

      if (req.params.id) {
        where["group_id"] = req.params.id;
      }
      
      // get all group in account
      let user_groups = await db.user.user_group.get(
        {
          where
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

      let data = _.schema.role.list(roles);
      if (req.params.id) {
        if (roles.length === 0) {
          return response.errorNotFound();
        }
        data = _.schema.role.get(roles[0]);
      }
      return response.success(data, "user groups");
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
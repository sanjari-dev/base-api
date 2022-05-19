

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
      
      const account = await db.user.account
        .scope({method: ["profile", db.user]})
        .findByPk(req.user.id);
      
      const data = {
        user: _.schema.user.get(account),
        role: _.schema.role.get(account.group)
      };
      return response.success(data, "user");
    } 
    
    // handle error code
    catch (err) {
      return response.errorServer(err);
    }
  }

  async edit(req, res, next)
  {
    const _ = sans.app().class;
    const response = sans.helpers.response;
    try {
      
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
        role: _.schema.role.get(account.group)
      };
      return response.success(data, "profile changed successfully");
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
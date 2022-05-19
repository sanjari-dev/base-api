

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
        .scope({
          method: ["profile", db.user]
        })
        .findByPk(req.user.id);
      const data = _.schema.group.get(account.group);
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
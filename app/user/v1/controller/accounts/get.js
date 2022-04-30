
export default async (req, res, next) => {

  /**
   * handle error response
   */
  try {
    
    const _ = sans.helpers.apps();

    if (req.params.account_id) {
      
      if (!parseInt(req.params.account_id)) {
        return sans.response.errorNotFound(res);
      }
      
      const accounts = await db.user.account.findByPk(req.params.account_id);

      if (!accounts) {
        return sans.response.errorNotFound(res);
      }

      // get all group in account
      let user_groups = await db.user.user_group.get(
        {
          where: {
            account_id: accounts.id
          }
        }
      );

      /**
       * response data
       */
      const data = {
        user: _.schema.user(accounts),
        roles: _.schema.roles(user_groups)
      };

      /**
       * response success data
       */
      return sans.response.successData(res, data, "user account");
    }

    const accounts = await db.user.account.findAll();
    
    /**
     * response data
     */
    const data = {
      users: _.schema.users(accounts)
    };

    /**
     * response success data
     */
    return sans.response.successData(res, data, "user accounts");
  } catch (err) {
    return sans.response.errorServer(res, err);
  }

}
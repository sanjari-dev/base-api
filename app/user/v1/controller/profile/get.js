
export default async (req, res, next) => {

  /**
   * handle error response
   */
  try {
    
    const _ = sans.helpers.apps();
    const account = await db.user.account.findByPk(req.user.id);

    // check account
    if (!account) {
      // response not found if not exist
      return sans.response.errorNotAuth(res, "user not available");
    }

    // get all group in account
    let user_groups = await db.user.user_group.get(
      {
        where: {
          account_id: account.id
        }
      }
    );

    /**
     * response data
     */
    const data = {
      user: _.schema.user(account),
      roles: _.schema.roles(user_groups)
    };

    /**
     * response success data
     */
    return sans.response.successData(res, data, "profile user");
  } catch (err) {
    return sans.response.errorServer(res, err);
  }

}
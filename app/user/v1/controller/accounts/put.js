
export default async (req, res, next) => {

  /**
   * handle error response
   */
  try {
    
    const _ = sans.helpers.apps();
    const account = await db.user.account.findByPk(req.params.account_id);

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
    let roles = [];
    user_groups.forEach(x => {
      roles.push(
        {
          role: sans.helpers.apps().schema.role(x)
        }
      )
    });

    await db.user.account.update(
      {
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        phone_number: req.body.phone_number,
        image: req.body.image
      },
      {
        where: {
          id: account.id
        }
      }
    );
    
    const account_update = await db.user.account.findByPk(account.id);

    /**
     * response data
     */
    const data = {
      user: sans.helpers.apps().schema.user(account_update),
      roles
    };

    /**
     * response success data
     */
    return sans.response.successData(res, data, "profile user");
  } catch (err) {
    return sans.response.errorServer(res, err);
  }

}
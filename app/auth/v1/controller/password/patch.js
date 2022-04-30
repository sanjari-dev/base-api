
export default async (req, res, next) => {

  /**
   * handle error response
   */
  try {
    
    const _ = sans.helpers.apps();
    const account = await db.user.account.findByPk(req.user.id);
    const id = account.id;

    // compare password and password user
    if (!_.helpers.comparePassword(req.body.password, { id, password: account.password })) {

      // send response with error not found because password incorrect
      return sans.response.errorBadRequest(res, "password doesn't match");
    }

    await db.user.account.update(
      {
        password: sans.helpers.sha(`${id}-${req.body.new_password}`)
      },
      {
        where: {
          id
        }
      }
    );

    /**
     * response data
     */
    const data = {};

    /**
     * response success data
     */
    return sans.response.successData(res, data, "password changed successfully");
  } catch (err) {
    return sans.response.errorServer(res, err);
  }

}

export default async (req, res, next) => {

  /**
   * handle error response
   */
  try {
    
    const _ = sans.helpers.apps();

    // validate username
    if (!req.body.username) {
      return sans.response.errorBadRequest(res, "username is required");
    }

    // validate password
    if (!req.body.password) {
      return sans.response.errorBadRequest(res, "password is required");
    }

    let account = await db.user.account.add(
      {
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        phone_number: req.body.phone_number,
        name: req.body.name,
        profile: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp",
        verified: 1,
        otp: 0
      }
    );

    /**
     * response data
     */
    const data = {
      user: _.schema.user(account)
    };

    /**
     * response success data
     */
    return sans.response.successData(res, data, "successfully added");
  } catch (err) {
    return sans.response.errorServer(res, err);
  }

}
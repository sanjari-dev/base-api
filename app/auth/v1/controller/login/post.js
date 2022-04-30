import jwt from "jsonwebtoken";

export default async (req, res, next) => {

  /**
   * handle error response
   */
  try {

    // set option {}
    let where_account = {};

    // validate username or email
    // priority to username
    if (req.body.email) {
      if (req.body.username) {
        where_account.username = req.body.username;
      } else {
        where_account.email = req.body.email;
      }
    } else {
      if (req.body.username) {
        where_account.username = req.body.username;
      } else {
        return sans.response.errorBadRequest(res, "username or email is required");
      }
    }

    // validate password
    if (!req.body.password) {
      return sans.response.errorBadRequest(res, "password is required");
    }

    // get account where option
    let account = await db.user.account.findOne(
      {
        where: where_account
      }
    );

    // check account
    if (!account) {
      if (Object.keys(where_account)[0] === "username") {
        if (!req.body.email) {
          // response not found if not exist
          return sans.response.errorNotAuth(res, "Unregistered username or email");
        }
        // get account where option
        account = await db.user.account.findOne(
          {
            where: {
              email : req.body.email
            }
          }
        );
        if (!account) {
          // response not found if not exist
          return sans.response.errorNotAuth(res, "Unregistered username or email");
        }
      }
    }

    // compare password and password user
    if (!sans.helpers.apps().helpers.comparePassword(req.body.password, { id: account.id, password: account.password })) {

      // send response with error not found because password incorrect
      return sans.response.errorNotAuth(res, "password doesn't match");
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

    // data jwt only id account
    let data_jwt = {
      id: account.id
    };

    // option jwt
    let option = {
      expiresIn: sans.helpers.apps().utils.jwt.jwtExpiration
    }

    // create token jwt
    let token = jwt.sign(data_jwt, sans.helpers.apps().utils.jwt.secret_key, option);

    // set token to database
    token = await db.user.token.createToken(account.id, token);

    /**
     * response data
     */
    const data = {
      user: sans.helpers.apps().schema.user(account),
      roles,
      token
    };

    /**
     * response success data
     */
    return sans.response.successData(res, data, "login has been successful");
  } catch (err) {
    return sans.response.errorServer(res, err);
  }

}
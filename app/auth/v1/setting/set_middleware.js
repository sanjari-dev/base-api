import jwt from "jsonwebtoken";

const token = async (req, res, next) => {

  // block try
  try {

    // get token from request headers access token
    let token = req.headers.authorization;

    // isEmpty token
    if (!token) {
      if (req.session.token) {
        token = req.session.token;
      } else {
        return sans.response.errorNotAuth(res, "token not found and token is required")
      }
    }

    token = token.split(' ')[1]

    // isEmpty token
    if (!token) {
      return sans.response.errorNotAuth(res, "token not found and token is required")
    }

    // declaration variable user
    let user = {};

    // try get user with token
    try {
      user = jwt.verify(token, sans.headers.apps().utils.secret_key);
    }

    // handle error jwt
    catch (err) {

      // error expired token
      if (err instanceof jwt.TokenExpiredError) {

        // send response with expired token
        return sans.response.errorNotFound(res, "token has expired and please update now", {}, true);
      }

      // token invalid
      if (err.message == "invalid signature") {

        // send response with invalid token
        return sans.response.errorNotFound(res, "invalid token and please update now", {}, true);
      }

      // token invalid
      if (err.message == "jwt malformed") {

        // send response with invalid token
        return sans.response.errorNotFound(res, "invalid token and please update now", {}, true);
      }

      // token invalid
      if (err.message == "invalid token") {

        // send response with invalid token
        return sans.response.errorNotFound(res, "invalid token and please update now", {}, true);
      }

      // send response with error code
      return sans.response.errorServer(res, err);
    }

    let dataToken = await db.user.token.findOne(
      {
        where: {
          token
        }
      }
    )

    if (!dataToken) {
      // send response with expired token
      return sans.response.errorNotFound(res, "token has expired and please update now", {}, true);
    }

    if (req.use_verified) {
      let account = await db.user.account.findByPk(user.id)
      if (!account.verified) {
        return sans.response.errorNotAuth(res, "account not verified")
      }
    }

    let account = await db.user.account.findByPk(user.id);
    if (!account) {
      // response not found if not exist
      return sans.response.errorNotFound(res, "user not found", {}, true);
    }

    req.user = user
    return next()
  }

  // handle error code
  catch (err) {
    return sans.response.errorServer(res, err);
  }
}

export default () => {
  sans.middleware["token"] = token;
}
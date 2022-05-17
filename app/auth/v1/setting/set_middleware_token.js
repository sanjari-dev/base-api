import jwt from "jsonwebtoken";

export default class SetMiddlewareToken
{
  static #_ini = undefined;

  constructor()
  {}

  run()
  {
    sans.middleware.headers["token"] = this.#token;
  }

  async #token(req, res, next)
  {
    
    const _ = sans.app().class;
    const response = sans.helpers.response;

    // block try
    try {

      // get token from request headers access token
      let token = req.headers.authorization;

      // isEmpty token
      if (!token) {
        if (req.session.token) {
          token = req.session.token;
        } else {
          return response.errorForbidden("token not found and token is required");
        }
      }

      token = token.split(' ')[1]

      // isEmpty token
      if (!token) {
        return response.errorForbidden("token not found and token is required");
      }

      // declaration variable user
      let user = {};

      // try get user with token
      try {
        user = jwt.verify(token, _.utils.jwt.secret_key);
      }

      // handle error jwt
      catch (err) {

        // error expired token
        if (err instanceof jwt.TokenExpiredError) {

          // send response with expired token
          return response.errorForbidden("token has expired and please update now", {}, true);
        }

        // token invalid
        if (err.message == "invalid signature") {

          // send response with invalid token
          return response.errorForbidden("invalid token and please update now", {}, true);
        }

        // token invalid
        if (err.message == "jwt malformed") {

          // send response with invalid token
          return response.errorForbidden("invalid token and please update now", {}, true);
        }

        // token invalid
        if (err.message == "invalid token") {

          // send response with invalid token
          return response.errorForbidden("invalid token and please update now", {}, true);
        }

        // send response with error code
        return response.errorServer(err);
      }

      let dataToken = await db.user.token.findOne(
        {
          where: {
            token
          }
        }
      );

      if (!dataToken) {
        // send response with expired token
        return response.errorForbidden("token has expired and please update now", {}, true);
      }
    
      let account = await db.user.account.findByPk(user.id);
      if (!account) {
        // response not found if not exist
          return response.errorForbidden("token has expired and please update now", {}, true);
      }
      if (!account.verified) {
        return response.errorForbidden("token has expired and please update now", {}, true);
      }

      req.user = user;
      return next();
    }

    // handle error code
    catch (err) {
      return response.errorServer(err);
    }
  }

  static setup()
  {
    if (!this.#_ini) {
      this.#_ini = new SetMiddlewareToken();
    }
    return this.#_ini;
  }
}
/**
 * middleware to check x-access-token
 * @param {request} request endpoint
 * @param {response} response endpoint
 * @param {next} next 
 * @returns return matching middleware
 */
export default (req, res, next) => {

  // block try
  try {


    // isEmpty x-access-token
    if (!req.headers["x-access-token"]) {
      if (req.session.x_access_token) {
        req.headers["x-access-token"] = req.session.x_access_token;
      } else {
        return sans.response.errorForbidden(res, "x-access-token not found and x-access-token is required")
      }
    }

    // verify x-access-token
    if (req.headers["x-access-token"] != "sans@dev") {
      return sans.response.errorForbidden(res, "x-access-token not allowed")
    }

    return next()
  }

  // handle error code
  catch (err) {
    return sans.response.errorServer(res, err);
  }
};
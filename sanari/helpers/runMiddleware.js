/**
 * function calls its own function to get custom middleware
 * @param {middleware array} middleware from custom endpoint
 * @param {request} request from custom endpoint
 * @param {response} response from custom endpoint
 * @param {iteration} iteration of middleware
 * @returns middleware automatic next middleware
 */
function loop(middleware, req, res, i) {
  /**
   * check if index is more than data length
   */
  if (i >= (middleware.length - 1)) {

    /**
     * if iteration is more than data length then return last middleware function
     */
    return middleware[middleware.length - 1](req, res);
  }

  /**
   * if iteration is less than data length then return streak middleware
   */
  return middleware[i](req, res, () => {
    return loop(middleware, req, res, i + 1)
  });
}

/**
 * function to call custom middleware
 * @param {middleware array} middleware from custom endpoint
 * @param {request} request from endpoint
 * @param {response} response from endpoint
 */
export default (middleware, req, res) => {

  // is exist middleware defined
  if (middleware.length > 0) {

    // validate middleware as function to call
    for (let i = 0; i < middleware.length; i++) {
      if (typeof middleware[i] != "function") {
        let err = new Error("Middleware Not Function")
        return sans.response.errorServer(res, err);
      }
    }

    // execute the middleware
    return loop(middleware, req, res, 0);
  }
  return sans.response.errorNotFound(res, "not found");
};
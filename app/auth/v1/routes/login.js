const express = require('express');
const router = express.Router();

/**
 * endpoint POST "/auth/login"
 */
router.post("/",
  async (req, res, next) => {
    req.permission_name = "v1_post_auth_login";

    // set middleware
    let middleware = [
      sans.middleware.x_access_token,
      sans.helpers.app(__dirname).controller.login.post
    ];

    // call middleware function custom
    sans.helpers.runMiddleware(middleware, req, res);
  }
);

module.exports = router;
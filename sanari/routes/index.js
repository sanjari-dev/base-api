const express = require('express');
const router = express.Router();

/**
 * endpoint GET "/"
 */
router.get('/', async (req, res, next) => {
  
  req.permission_name = "baseurl";

  // set middleware
  let middleware = [
    sans.controller.base_home
  ];

  // call middleware function custom
  sans.helpers.runMiddleware(middleware, req, res);
});

module.exports = router;
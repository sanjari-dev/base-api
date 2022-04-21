const express = require('express');
const router = express.Router();

/**
 * endpoint GET "/"
 */
router.get('/', async (req, res, next) => {

  const {name, version, dependencies, devDependencies = {}} = require(`${__basedir}/package.json`);
  const data = {name, version, dependencies, devDependencies};

  /**
   * response sayHallo "Sanari";
   * "Hallo Sanari"
   */
  return sanari.response.successData(res, data, sanari.helpers.sayHello("Sanari"));
});

/**
 * handle endpoint with folder
 */
sanari.config.routes(router, __filename, __dirname);

/**
 * handle endpoint with redirect to '/api
 */
router.all('/*', async (req, res) => {

  /**
   * send response with status not found
   */
  return sanari.response.errorNotFound(res);
});

module.exports = router;
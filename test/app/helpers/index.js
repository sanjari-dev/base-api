const fs = require('fs');
const path = require('path');
const basename = path.basename(__dirname).split(".js")[0];

/**
 * Containing Test with folder
 */
module.exports = describe(basename, () => {

  /**
   * Test suite with folder containing
   */
  sanari.config.testSuites(__filename, __dirname);
});
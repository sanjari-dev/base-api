const app = require("../../server");
global.request = require('supertest');
global.superagent = require('superagent');
global.app = app;
global.sanari.helpers.test = require('../helpers/test');

/**
 * Global Test
 */
describe("Tests", () => {
  /**
   * Test suite with folder containing
   */
  sanari.config.testSuites(__filename, __dirname);

});
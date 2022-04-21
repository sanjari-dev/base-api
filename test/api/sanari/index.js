const fs = require('fs');
const path = require('path');
const basename = path.basename(__dirname).split(".js")[0];

/**
 * Containing Test with folder
 */
module.exports = describe(basename, () => {

  beforeEach(async () => {

  });

  afterEach(async () => {

  });

  let data = require("./data")
  for (let i = 0; i < data.length; i++) {

    it(`${data[i].code}`, async () => {
      let try_it = data[i].try_it
      for (let j = 0; j < try_it.length; j++) {

        let res = await request(app)
          .get("/")
          .expect('Content-Type', /json/)
          .expect(data[i].code);

        let res_body = try_it[j].response
        sanari.helpers.test.sub_response(res_body, res.body);
      }
    });

  }


  /**
   * Test suite with folder containing
   */
  sanari.config.testSuites(__filename, __dirname);
});
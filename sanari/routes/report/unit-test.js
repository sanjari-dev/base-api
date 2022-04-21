const express = require('express');
const router = express.Router();
const { exec } = require("child_process");

function authentication(req, res, next) {
  let basic = req.headers.authorization;

  if (!basic) {
    let err = new Error('You are not authenticated!');
    res.setHeader('WWW-Authenticate', 'Basic');
    err.status = 401;
    return next(err)
  }

  let auth = new Buffer.from(basic.split(' ')[1],
    'base64').toString().split(':');
  let user = auth[0];
  let pass = auth[1];

  if (user == 'test' && pass == '!P@ssw0rd') {

    // If Authorized user
    next();
  } else {
    let err = new Error('You are not authenticated!');
    res.setHeader('WWW-Authenticate', 'Basic');
    err.status = 401;
    return next(err);
  }
}

// report unit tests
router.get('/',
  authentication,
  async (req, res, next) => {

    // default value object data;
    let data = {};

    /**
     * render web page
     */
    res.render('report/unit-test', data, (err, html) => {

      // check is error
      if (err) {
        /**
         * an error occurred and will send an error
         */
        console.log(err);
        return res.send({});
      }

      /**
       * no error occurs and will send data view
       */
      return res.send(html);
    });
  }
);

// update unit test status
router.get('/test',
  authentication,
  async (req, res, next) => {

    await exec("npm test", (error, stdout, stderr) => { });
    return res.redirect("/report/unit-test");
  }
);

module.exports = router;
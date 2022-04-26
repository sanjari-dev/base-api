import express from "express";
const router = express.Router();
const { exec } = require("child_process");

// report unit tests
router.get("/",
  async (req, res, next) => {

    // default value object data;
    let data = {};

    /**
     * render web page
     */
    res.render("report/unit-test", data, (err, html) => {

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
router.get("/test",
  (req, res, next) => {
    exec("npm test", (error, stdout, stderr) => {  });
    return res.redirect("/report/unit-test");
  }
);

export default router;
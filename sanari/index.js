/**
 * function configuration variable global
 */
function variable_global() {

  /**
   * create variable global
   */
  global.sanari = {};
  sanari["config"] = require("./config");
  sanari["utils"] = require("./utils");
  sanari["helpers"] = require("./helpers");
  sanari["middleware"] = require("./middleware");
  sanari["controller"] = require("./controllers");
  sanari["response"] = require("./response");

};

/**
 * function configuration database
 */
function db() {
  // console.log(sanari);
}

/**
 * Framework Sanari
 */
module.exports.sanari = () => {
  global.use = {};
  use["db"] = false;
  use["cron"] = false;

  variable_global();
  db();
}

/**
 * function configuration variable locals for access scope web
 * @param {res} res | response
 */
module.exports.middleware = (req, res, next) => {
  next();
};

/**
 * function routes
 */
module.exports.routes = () => {
  return require("./routes");
};
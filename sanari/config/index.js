const fs = require('fs');
const path = require('path');
const basename = path.basename(__filename);

const obj = {};

/**
 * filter file extension .js
 * require module path
 */
fs
  .readdirSync(__dirname)
  .filter(file => {
    return ((file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js') || file !== basename);
  })
  .forEach(file => {
    let name_app = file.split('.js')[0];
    obj[name_app] = require(`./${name_app}`);
  });

module.exports = obj;
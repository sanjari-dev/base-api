export default (filename, dirname) => {
  const fs = require('fs');
  const path = require('path');
  const basename = path.basename(filename);

  /**
   * filter file extension .js
   * require module path
   * add endpoint to app
   */
  fs
    .readdirSync(dirname)
    .filter(file => {
      return ((file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js') || file !== basename);
    })
    .forEach(file => {
      let name_app = file.split('.js')[0];
      require(`${dirname}/${name_app}`);
    });
};
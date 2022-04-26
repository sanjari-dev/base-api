export default (req, res) => {
  
  const {name, version, dependencies, devDependencies = {}} = require(`${__basedir}/package.json`);
  const data = {name, version, dependencies, devDependencies, app : app_name};

  /**
   * response sayHallo "Sanari";
   * "Hallo Sanari"
   */
  return sans.response.successData(res, data, sans.helpers.sayHello("Sanari"));
}
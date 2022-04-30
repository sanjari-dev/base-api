
export default (caller, regex = "") => {
  const url =  caller
    .replaceAll("\\", "/")
    .replace(directory.app.replaceAll("\\", "/"), "")
    .replaceAll(sans.helpers.app.version() + "/routes/", "")
    .replaceAll("/index.js", "");
    
  const regex_custom = regex
    .split("/")
    .map(x => {
      if (x !== "") {
        const x_custom = x.split(":");
        if (x_custom.length > 1) {
          return `{${x_custom[x_custom.length - 1]}}`;
        }
      }
      return x;
    })
    .join("/");
      
  return url + regex_custom;
}
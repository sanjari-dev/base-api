
export default (caller) => {
  return caller
    .replaceAll("\\", "/")
    .replace(directory.app.replaceAll("\\", "/"), "")
    .replaceAll(sans.helpers.app.version() + "/routes/", "")
    .replaceAll("/index.js", "");
}
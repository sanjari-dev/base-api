export default (dirname) => {
  const url_app = dirname
    .replaceAll("\\", "/")
    .replace(__basedir.replaceAll("\\", "/") + "/", "")
    .split("/")[0];
  
  if (url_app !== "app") {
    return new Error("Function For App");
  }
  const path_app = dirname
    .replaceAll("\\", "/")
    .replace(`${directory.app.replaceAll("\\", "/")}/`, "")
    .split("/");

  return app[path_app[0]][path_app[1]];
};
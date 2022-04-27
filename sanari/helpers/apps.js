import path from "path";

export default (filename = "") => {
  try {
    const dirname = path.dirname(filename === "" ? sans.caller() : filename);
    const path_app = dirname
      .replaceAll("\\", "/")
      .split(__basedir.replaceAll("\\", "/") + "/")[
        dirname
          .replaceAll("\\", "/")
          .split(__basedir.replaceAll("\\", "/")+ "/").length - 1
      ]
      .split("/");
      
    if (path_app[0] !== "app") {
      return new Error("Function For App");
    }
    return app[path_app[1]][path_app[2]];
  } catch (err) {
    return err; 
  }
};
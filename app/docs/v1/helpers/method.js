
export default (caller) => {
  if (caller) {
    return caller
      .replaceAll("\\", "/")
      .replace(directory.app.replaceAll("\\", "/"), "")
      .split("/")[
        sans.caller()
          .replaceAll("\\", "/")
          .replace(directory.app.replaceAll("\\", "/"), "")
          .split("/").length - 1
      ]
      .replace(".js", ""); 
  }
  return sans.caller()
      .replaceAll("\\", "/")
      .replace(directory.app.replaceAll("\\", "/"), "")
      .split("/")[
        sans.caller()
          .replaceAll("\\", "/")
          .replace(directory.app.replaceAll("\\", "/"), "")
          .split("/").length - 1
      ]
      .replace(".js", "");
}
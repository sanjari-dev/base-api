export default () => {
  const data = {
    user : sans.helpers.apps().schema.user(),
    roles : [
      {
        role : sans.helpers.apps().schema.role()
      }
    ]
  };
  const message = "login has been successful";
  return sans.response.app["200"](data, message);
}
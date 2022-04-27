export default () => {
  const data = {
    user : sans.helpers.apps().schema.user(),
    roles : [
      {
        role : sans.helpers.apps().schema.role()
      }
    ],
    token : "secret_token_user"
  };
  const message = "login has been successful";
  return sans.response.app["200"](data, message);
}
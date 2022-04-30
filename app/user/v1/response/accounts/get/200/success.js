export default () => {
  const data = {
    users : sans.helpers.apps().schema.users()
  };
  const message = "user accounts";
  return sans.response.app["200"](data, message);
}
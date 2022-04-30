export default () => {
  const data = {
    user : sans.helpers.apps().schema.user()
  };
  const message = "successfully changed";
  return sans.response.app["200"](data, message);
}
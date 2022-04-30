export default () => {
  const data = {
    group : sans.helpers.apps().schema.group()
  };
  const message = "successfully changed";
  return sans.response.app["200"](data, message);
}
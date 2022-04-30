export default () => {
  const data = {
    group : sans.helpers.apps().schema.group()
  };
  const message = "group";
  return sans.response.app["200"](data, message);
}
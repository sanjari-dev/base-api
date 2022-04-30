export default () => {
  const data = {
    groups : sans.helpers.apps().schema.groups()
  };
  const message = "groups";
  return sans.response.app["200"](data, message);
}
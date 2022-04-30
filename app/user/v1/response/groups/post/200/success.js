export default () => {
  const data = {
    group: sans.helpers.apps().schema.group()
  };
  const message = "successfully added";
  return sans.response.app["200"](data, message);
}
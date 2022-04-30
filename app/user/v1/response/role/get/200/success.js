export default () => {
  const data = {
    roles : [
      {
        role : sans.helpers.apps().schema.role()
      }
    ]
  };
  const message = "groups on user";
  return sans.response.app["200"](data, message);
}
export default () => {
  const data = {};
  const message = "token not found and token is required";
  return sans.response.app["403"](message, data, true);
}
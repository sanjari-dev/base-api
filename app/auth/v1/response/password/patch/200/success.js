export default () => {
  const data = {};
  const message = "password changed successfully";
  return sans.response.app["200"](data, message);
}
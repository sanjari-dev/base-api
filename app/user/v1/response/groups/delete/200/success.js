export default () => {
  const data = {};
  const message = "successfully deleted";
  return sans.response.app["200"](data, message);
}
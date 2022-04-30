export default () => {
  const message = "name is required";
  return sans.response.app["400"](message);
}
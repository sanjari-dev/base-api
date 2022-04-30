export default () => {
  const message = "username is required";
  return sans.response.app["400"](message);
}
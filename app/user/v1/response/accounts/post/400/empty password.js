export default () => {
  const message = "password is required";
  return sans.response.app["400"](message);
}
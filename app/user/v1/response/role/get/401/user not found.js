export default () => {
  const message = "user not available";
  return sans.response.app["401"](message);
}

export default () => {
  const message = "x-access-token not allowed";
  return sans.response.app["403"](message);
}
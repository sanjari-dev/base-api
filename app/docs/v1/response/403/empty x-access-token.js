
export default () => {
  const message = "x-access-token not found and x-access-token is required";
  return sans.response.app["403"](message);
}
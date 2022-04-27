

export default () => {
  const message = "username or email is required";
  return sans.response.app["400"](message);
}
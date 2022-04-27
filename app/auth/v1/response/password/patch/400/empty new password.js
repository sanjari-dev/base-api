

export default () => {
  const message = "new password is required";
  return sans.response.app["400"](message);
}
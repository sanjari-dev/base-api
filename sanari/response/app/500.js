export default (token_expired = false) => {
  return {
    success: false,
    code: sans.utils.code_http.ERROR_SERVER,
    data: {},
    message: "an error occurred on the server",
    token_expired
  };
};
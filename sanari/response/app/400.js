export default (message = "Bad Request", data = {}, token_expired = false) => {
  return {
    success: false,
    code: sans.utils.code_http.BAD_REQUEST,
    data,
    message,
    token_expired
  };
};
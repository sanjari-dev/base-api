export default (message = "Forbidden", data = {}, token_expired = false) => {
  return {
    success: false,
    code: sans.utils.code_http.FORBIDDEN,
    data,
    message,
    token_expired
  };
};
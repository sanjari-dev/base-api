export default (message = "Request Not Found", data = {}, token_expired = false) => {
  return {
    success: false,
    code: sans.utils.code_http.NOT_FOUND,
    data,
    message,
    token_expired
  };
};
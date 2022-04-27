export default (message = "Not Allowed To Access", data = {}, token_expired = false) => {
  return {
    success: false,
    code: sans.utils.code_http.UNAUTHORIZED,
    data,
    message,
    token_expired
  };
};
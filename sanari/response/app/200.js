export default (data = {}, message = "", token_expired = false) => {
  return {
    success: true,
    code: sans.utils.code_http.SUCCESS,
    data,
    message,
    token_expired
  };
};

export default (res, message = "Forbidden", data = {}, token_expired = false) => {
  return res.status(sans.utils.code_http.FORBIDDEN).json({
    success: false,
    code: sans.utils.code_http.FORBIDDEN,
    data,
    message,
    token_expired
  }).end();
};
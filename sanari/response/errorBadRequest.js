
export default (res, message = "Bad Request", data = {}, token_expired = false) => {
  return res.status(sans.utils.code_http.BAD_REQUEST).json({
    success: false,
    code: sans.utils.code_http.BAD_REQUEST,
    data,
    message,
    token_expired
  }).end();
};
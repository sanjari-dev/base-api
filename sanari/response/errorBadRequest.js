
module.exports = (res, message = "Bad Request", data = {}, token_expired = false) => {
  return res.status(sanari.utils.code_http.BAD_REQUEST).json({
    success: false,
    code: sanari.utils.code_http.BAD_REQUEST,
    data,
    message,
    token_expired
  }).end();
};
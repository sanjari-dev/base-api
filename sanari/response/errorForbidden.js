
module.exports = (res, message = "Forbidden", data = {}, token_expired = false) => {
  return res.status(sanari.utils.code_http.FORBIDDEN).json({
    success: false,
    code: sanari.utils.code_http.FORBIDDEN,
    data,
    message,
    token_expired
  }).end();
};
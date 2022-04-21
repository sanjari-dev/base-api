
module.exports = (res, message = "Request Not Found", data = {}, token_expired = false) => {
  return res.status(sanari.utils.code_http.NOT_FOUND).json({
    success: false,
    code: sanari.utils.code_http.NOT_FOUND,
    data,
    message,
    token_expired
  }).end();
};
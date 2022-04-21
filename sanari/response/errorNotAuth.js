
module.exports = (res, message = "Not Allowed To Access", data = {}, token_expired = false) => {
  return res.status(sanari.utils.code_http.UNAUTHORIZED).json({
    success: false,
    code: sanari.utils.code_http.UNAUTHORIZED,
    data,
    message,
    token_expired
  }).end();
};
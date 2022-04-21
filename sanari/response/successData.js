module.exports = (res, data = {}, message = "", token_expired = false) => {
  return res.status(sanari.utils.code_http.SUCCESS).json({
    success: true,
    code: sanari.utils.code_http.SUCCESS,
    data,
    message,
    token_expired
  }).end();
};
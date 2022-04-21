
module.exports = (res, err, token_expired = false) => {
  console.log(err);
  return res.status(sanari.utils.code_http.ERROR_SERVER).json({
    success: false,
    code: sanari.utils.code_http.ERROR_SERVER,
    data: {},
    message: err.message,
    token_expired
  }).end();
};
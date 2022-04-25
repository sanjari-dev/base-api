
export default (res, err, token_expired = false) => {
  console.log(err);
  return res.status(sans.utils.code_http.ERROR_SERVER).json({
    success: false,
    code: sans.utils.code_http.ERROR_SERVER,
    data: {},
    message: err.message,
    token_expired
  }).end();
};
export default (res, data = {}, message = "", token_expired = false) => {
  return res.status(sans.utils.code_http.SUCCESS).json({
    success: true,
    code: sans.utils.code_http.SUCCESS,
    data,
    message,
    token_expired
  }).end();
};
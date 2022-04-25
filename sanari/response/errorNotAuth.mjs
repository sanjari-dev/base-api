
export default (res, message = "Not Allowed To Access", data = {}, token_expired = false) => {
  return res.status(sans.utils.code_http.UNAUTHORIZED).json({
    success: false,
    code: sans.utils.code_http.UNAUTHORIZED,
    data,
    message,
    token_expired
  }).end();
};
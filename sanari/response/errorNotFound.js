
export default (res, message = "Request Not Found", data = {}, token_expired = false) => {
  return res.status(sans.utils.code_http.NOT_FOUND).json({
    success: false,
    code: sans.utils.code_http.NOT_FOUND,
    data,
    message,
    token_expired
  }).end();
};
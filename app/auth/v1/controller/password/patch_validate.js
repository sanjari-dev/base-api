
export default async (req, res, next) => {

  if (!req.body.password) {
    return sans.response.errorBadRequest(res, "password is required");
  }

  if (!req.body.new_password) {
    return sans.response.errorBadRequest(res, "new password is required");
  }

  return next();
}
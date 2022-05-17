
import express from "express";

export default (endpoint) => {
  endpoint.router = express.Router();
  
  const _ = sans.app();

  endpoint.post(_, "/login", "login", "post_login");
  endpoint.patch(_, "/password", "password", "patch_password");
  endpoint.post(_, "/forgot-password", "password", "post_password");
  endpoint.get(_, "/otp", "otp", "get_otp");
  endpoint.post(_, "/otp", "otp", "post_otp");

  return endpoint.router;
};
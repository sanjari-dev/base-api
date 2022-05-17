
import express from "express";

export default (endpoint) => {
  endpoint.router = express.Router();
  
  const _ = sans.app();
  
  endpoint.resource(_, "/accounts", "account", "account", "account");
  endpoint.resource(_, "/groups", "group", "group", "group");

  return endpoint.router;
};
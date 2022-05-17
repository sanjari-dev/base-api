
import express from "express";

export default (endpoint) => {
  endpoint.router = express.Router();
  
  const _ = sans.app();

  endpoint.get(_, "/profile", "profile", "get_profile");
  endpoint.put(_, "/profile", "profile", "put_profile");
  endpoint.get(_, "/groups", "group", "get_groups");
  endpoint.get(_, "/groups/:id", "group@show", "get_group", "get_id");
  
  return endpoint.router;
};
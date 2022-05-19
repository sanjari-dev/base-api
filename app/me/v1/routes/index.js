
import express from "express";

export default (endpoint) => {
  endpoint.router = express.Router();
  
  const _ = sans.app();

  endpoint.get(_, "/profile", "profile", "get_profile");
  endpoint.put(_, "/profile", "profile", "put_profile");
  endpoint.get(_, "/group", "group", "get_group");
  endpoint.get(_, "/menus", "menu", "get_menu");
  endpoint.get(_, "/permissions", "permission", "get_permission");
  endpoint.get(_, "/notifications", "notification", "get_notification");
  endpoint.get(_, "/activities", "activity", "get_activity");
  endpoint.get(_, "/employee", "employee", "get_employee");
  
  return endpoint.router;
};
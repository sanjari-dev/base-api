import * as get_id from "./get_id.js";
import * as put_id from "./put_id.js";
import * as del_id from "./del_id.js";
import * as get from "./get.js";
import * as post from "./post.js";
import * as del from "./delete.js";

import express from "express";
const router = express.Router();

sans.endpoint.get(router, get_id, "get_id", "/:group_id");
sans.endpoint.put(router, put_id, "put_id", "/:group_id");
sans.endpoint.delete(router, del_id, "delete", "/:group_id");
sans.endpoint.get(router, get);
sans.endpoint.post(router, post);
sans.endpoint.delete(router, del);

export default router;
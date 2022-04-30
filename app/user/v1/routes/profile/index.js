import * as get from "./get.js";
import * as put from "./put.js";

import express from "express";
const router = express.Router();

sans.endpoint.get(router, get);
sans.endpoint.put(router, put);

export default router;
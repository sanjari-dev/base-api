import fs from "fs";
import express from "express";


/**
 * Load Router Config
 */
const load_router = (basedir, root = "routes") => {
  const router = express.Router();
  const sub = fs.readdirSync(`${basedir}/${root}`).filter(x => x.slice(-3) === ".js" || x.indexOf(".") === -1);
  for (let i = 0; i < sub.length; i++) {
    if (sub[i].indexOf(".") === -1) {
      router.use(`/${sub[i]}`, load_router(`${basedir}/${root}`, sub[i]));
    }else if(sub[i].slice(-3) === ".js"){
      if (sub[i].split(".js")[0] === "index") {
        router.use("/", sans.require(`${basedir}/${root}/${sub[i]}`));
      }else{
        router.use(`/${sub[i].split('.js')[0]}`, sans.require(`${basedir}/${root}/${sub[i]}`));
      }
    }
  }
  return router;
}

/**
 * Setup Global Sanari App
 */
export default () => {
  sans["router"] = load_router;
};
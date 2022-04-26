import fs from "fs";
import express from "express";


/**
 * Load Router Config
 */
const load_router = async (basedir, root = "routes") => {
  const router = express.Router();
  const sub = fs.readdirSync(`${basedir}/${root}`).filter(x => x.slice(-3) === ".js" || x.indexOf(".") === -1);
  for (let i = 0; i < sub.length; i++) {
    if (sub[i].indexOf(".") === -1) {
      router.use(`/${sub[i]}`, await load_router(`${basedir}/${root}`, sub[i]));
    }
    if(sub[i].slice(-3) === ".js"){
      try {
        if (sub[i].split(".js")[0] === "index") {
          const obj = await import(`file://${basedir}/${root}/${sub[i]}`);
          if (Object.keys(obj).find(x => x === "default")) {
            router.use("/", obj.default);
          }else{
            router.use("/", obj);
          }
        }else{
          const obj = await import(`file://${basedir}/${root}/${sub[i]}`);
          if (Object.keys(obj).find(x => x === "default")) {
            router.use(`/${sub[i].split(".js")[0]}`, obj.default);
          }else{
            router.use(`/${sub[i].split(".js")[0]}`, obj);
          }
        }
      } catch (err) {
        console.debug(err);
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
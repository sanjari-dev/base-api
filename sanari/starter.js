/**
 * Import Module
 */
import express from "express";

/**
 * Import System Module Sanari
 */
import system from "./system/sanari.js";

/**
 * Object Keys System Module
 */
const keys_system = Object.keys(system);

/**
 * Sanari App
 * @param {express} app_express 
 */
const sanari = async () => {
  global.sans = {};
  for (let i = 0; i < keys_system.length; i++) {
    await system[keys_system[i]]();
  }
}

/**
 * middleware default for sanari app
 * @returns middleware function express
 */
const middleware = () => {
  return (req, res, next) => {
    next();
  }
}

const routes = async () => {
  const router = express.Router();

  /**
   * Load Routes Sanari
   */
  router.use("/", await sans.router(`${directory.sanari}`));
  
  for (let i = 0; i < Object.keys(app_version).length; i++) {
    const temp_app_version = Object.keys(app_version)[i];
    for (let j = 0; j < Object.keys(app_version[temp_app_version]).length; j++) {
      const temp_app_name = Object.keys(app_version[temp_app_version])[j];
      if (Object.keys(app[temp_app_name]).find(x => x === temp_app_version)) {
        router.use(`/api/${temp_app_version}/${temp_app_name}`, 
          await sans.router(`${directory.app}/${temp_app_name}/${temp_app_version}`)
        );
      }
    }
  }
    
  /**
   * handle endpoint with redirect to "/"
   */
  router.all("/*", (req, res) => {

    /**
     * send response with status not found
     */
    return sans.response.errorNotFound(res);
  });
  return router;
}

export default {
  sanari,
  middleware,
  routes,
};
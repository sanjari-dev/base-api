/**
 * Configuration Env
 */
import dotenv from "dotenv";
dotenv.config();

import path from "path";
import url from "url";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
global.__basedir = __dirname;

/**
 * Module dependencies.
 */
import express from "express";
import createError from "http-errors";
import logger from "morgan";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import session from "express-session";
import cors from "cors";

/**
 * app
 */
const app_express = express();

/**
 * Module Sanari
 */
import base from "./sanari/starter.js";

/**
 * Running Sanari Project
 */
await base.sanari();

/**
 * configuration views engine with ejs
 */
app_express.set("views", [path.join(__dirname, "views"), path.join(__dirname, "public")]);
app_express.set("view engine", "ejs");

if (!(process.env.NODE_ENV === "test")) {
  /**
   * logger
   */
  app_express.use(logger("dev"));
}

/**
 * request limit and with json encoding express
 */
app_express.use(express.json());
app_express.use(express.urlencoded({ extended: false }));

/**
 * request limit and with json encoding
 */
app_express.use(cookieParser());
app_express.use(bodyParser.json());
app_express.use(bodyParser.urlencoded({ extended: false }))
 
/**
 * create static page
 */
app_express.use(express.static(path.join(__dirname, "public")));

/**
 * middleware cors for manage routes
 */
app_express.use(cors());

/**
 * configuration session
 */
app_express.use(session({
  secret: "0ddb208a0b2cd0707a238fb2c27a3f88ddcae49d",
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));

/**
 * started with base file
 */
app_express.use(base.middleware());

/**
 * routes
 */
app_express.use("/", await base.routes());

// catch 404 and forward to error handler
app_express.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app_express.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app_express.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

export default app_express;
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
 * Module Core Sanari
 */
// import Main from "./core/index.js";
import Sanari from "sanari-api";

/**
 * app
 */
const server = express();

/**
 * configuration views engine with ejs
 */
server.set("views", 
  [
    path.join(__dirname, "views"),
    path.join(__dirname, "public")
  ]
);
server.set("view engine", "ejs");

if (!(process.env.NODE_ENV === "test"))
{
  /**
   * logger
   */
  server.use(logger("dev"));
}

/**
 * request limit and with json encoding express
 */
server.use(express.json());
server.use(express.urlencoded(
  {
    extended: false
  }
));

/**
 * request limit and with json encoding
 */
server.use(cookieParser());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded(
  {
    extended: false
  }
));
 
/**
 * create static page
 */
server.use(express.static(path.join(__dirname, "public")));

/**
 * middleware cors for manage routes
 */
server.use(cors());

/**
 * configuration session
 */
server.use(session({
  secret: "0ddb208a0b2cd0707a238fb2c27a3f88ddcae49d",
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));

/**
 * routes
 */
// server.use("/", Main.main());
const config = {
  directory: {
    db: path.join(
      path.join(
        __dirname,
        "database"
      ),
      "postgres"
    ),
    app: path.join(__dirname, "app")
  }
};

server.use(Sanari.main(config));

// catch 404 and forward to error handler
server.use(function(req, res, next) {
  next(createError(404));
});

// error handler
server.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

export default server;
/**
 * Configuration Env
 */
// import dotenv from "dotenv";
// dotenv.config();
require("dotenv").config();

module.exports =   {
  "development": {
    "username": process.env.DB_USERNAME || "postgres",
    "password": process.env.DB_PASSWORD || "sans",
    "database": process.env.DB_DATABASE || "sanari",
    "host": process.env.DB_HOST || "localhost",
    "dialect": process.env.DB_DIALECT || "postgres",
    "pool": {
      "acquire": 10 * 60 * 1000,
      "idle": 10 * 60 * 1000
    },
    "schema" : "user",
    "logging": false
  },
  "test": {
    "username": process.env.DB_USERNAME || "postgres",
    "password": process.env.DB_PASSWORD || "sans",
    "database": "test_" + process.env.DB_DATABASE || "sanari",
    "host": process.env.DB_HOST || "localhost",
    "dialect": process.env.DB_DIALECT || "postgres",
    "logging": false,
    "schema" : "user",
  },
  "production": {
    "username": process.env.DB_USERNAME || "postgres",
    "password": process.env.DB_PASSWORD || "sans",
    "database": process.env.DB_DATABASE || "sanari",
    "host": process.env.DB_HOST || "localhost",
    "dialect": process.env.DB_DIALECT || "postgres",
    "schema" : "user",
  }
}
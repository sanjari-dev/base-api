/**
 * Configuration Env
 */
require("dotenv").config();

module.exports =   {
  "development": {
    "username": process.env.DB_USER_USERNAME || "postgres",
    "password": process.env.DB_USER_PASSWORD || "sans",
    "database": process.env.DB_USER_DATABASE || "sanari",
    "host": process.env.DB_USER_HOST || "localhost",
    "port": process.env.DB_USER_PORT || 5432,
    "dialect": process.env.DB_USER_DIALECT || "postgres",
    "pool": {
      "acquire": 10 * 60 * 1000,
      "idle": 10 * 60 * 1000
    },
    "schema" : "user",
    "logging": false
  },
  "test": {
    "username": process.env.DB_USER_USERNAME || "postgres",
    "password": process.env.DB_USER_PASSWORD || "sans",
    "database": "test_" + process.env.DB_USER_DATABASE || "sanari",
    "host": process.env.DB_USER_HOST || "localhost",
    "port": process.env.DB_USER_PORT || 5432,
    "dialect": process.env.DB_USER_DIALECT || "postgres",
    "logging": false,
    "schema" : "user",
  },
  "production": {
    "username": process.env.DB_USER_USERNAME || "postgres",
    "password": process.env.DB_USER_PASSWORD || "sans",
    "database": process.env.DB_USER_DATABASE || "sanari",
    "host": process.env.DB_USER_HOST || "localhost",
    "port": process.env.DB_USER_PORT || 5432,
    "dialect": process.env.DB_USER_DIALECT || "postgres",
    "schema" : "user",
  }
}
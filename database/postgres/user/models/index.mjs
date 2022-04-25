'use strict';

import fs from "fs";
import url from "url";
import path from "path";
import Sequelize from "sequelize";
import file_config from "./../config/config.mjs";


const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = file_config[env];

const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

const file = fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js' || file.slice(-4) === '.mjs');
  });

for (let i = 0; i < file.length; i++) {
  const obj = await import("file://" + path.join(__dirname, file[i]));
  let model = {};
  if (Object.keys(obj).find(x => x === "default")) {
    model = obj.default(sequelize, Sequelize.DataTypes);
  }else{
    model = obj(sequelize, Sequelize.DataTypes);
  }
  db[model.name] = model;
}

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
  db[modelName].schema("user");
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;

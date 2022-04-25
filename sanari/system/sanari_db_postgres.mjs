import fs from "fs";

/**
 * Setup Global Sanari App
 */
export default () => {
  global.db = {};
  const list_db = fs.readdirSync(directory.db.postgres).filter(file => file.indexOf(".") === -1);
  for (let i = 0; i < list_db.length; i++) {

    const model = fs.readdirSync(`${directory.db.postgres}/${list_db[i]}/models`)
      .find(file => 
        (file.slice(-3) === ".js" || file.slice(-4) === ".mjs") &&
        (file.split(".js")[0] === "index" || file.split(".mjs")[0] === "index")
      );
    
    if (model.slice(-4) === ".mjs") {
      import(`file://${directory.db.postgres}/${list_db[i]}/models/index.mjs`)
        .then(result => {
          let obj = result;
          if (Object.keys(result).find(x => x === "default")) {
            obj = result.default;
          }
          db[list_db[i]] = obj;
        });
    }
    if (model.slice(-3) === ".js") {
      db[list_db[i]] = sans.require(`${directory.db.postgres}/${list_db[i]}/models/index.js`)
    }
  }
};
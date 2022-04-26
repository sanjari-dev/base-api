import fs from "fs";

/**
 * Setup Global Sanari App
 */
export default async() => {
  global.db = {};
  const list_db = fs.readdirSync(directory.db.postgres).filter(file => file.indexOf(".") === -1);
  for (let i = 0; i < list_db.length; i++) {
    await import(`file://${directory.db.postgres}/${list_db[i]}/models/index.js`)
      .then(result => {
        let obj = result;
        if (Object.keys(result).find(x => x === "default")) {
          obj = result.default;
        }
        db[list_db[i]] = obj;
      });
  }
};
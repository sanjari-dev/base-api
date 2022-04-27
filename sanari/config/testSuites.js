import fs from "fs";
import path from "path";

export default async (filename, dirname) => {
  const basename = path.basename(filename);

  /**
   * filter file extension .js
   * require module path
   */
  const file = fs
    .readdirSync(dirname)
    .filter(file => {
      return ((file.indexOf(".") !== 0) && (file !== basename) && (file.slice(-3) === ".js") || file !== basename);
    });

  for (let i = 0; i < file.length; i++) {
    await import(`file://${dirname}/${file[i]}`);
  }

};
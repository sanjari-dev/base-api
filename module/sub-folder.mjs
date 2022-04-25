import fs from "fs";

const filter = (file) => (
  file.slice(-4) === ".mjs" || 
  file.indexOf(".") === -1 ||
  file.slice(-3) === ".js"
);

const get_sub_folder = async (basedir) => {
  try {
    const sub = fs.readdirSync(basedir).filter(x => filter(x));
    const sub_ = {};
    for (let i = 0; i < sub.length; i++) {
      if (sub[i].indexOf(".") === -1) {
        sub_[sub[i]] = await get_sub_folder(`${basedir}/${sub[i]}`);
      }
      if(sub[i].slice(-4) === ".mjs"){
        try {
          const obj = await import(`file://${basedir}/${sub[i]}`);
          if (Object.keys(obj).find(x => x === "default")) {
            sub_[sub[i].split(".mjs")[0]] = obj.default;
          }else{
            sub_[sub[i].split(".mjs")[0]] = obj;
          }
        } catch (err) {
          console.debug(err);
        }
      }
      if(sub[i].slice(-3) === ".js"){
        try {
          const obj = sans.require(`${basedir}/${sub[i]}`);
          sub_[sub[i].split(".js")[0]] = obj;
        } catch (err) {
          console.debug(err);
        }
      }
    }
    return sub_;
  } catch (err) {
    return {};
  }
}

export default get_sub_folder;
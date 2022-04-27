
import fs from "fs";
import path from "path";

const routes = async (router) => {
  const basename = path.basename(sans.caller());
  const dirname = path.dirname(sans.caller());
  const file = fs
    .readdirSync(dirname)
    .filter(file => {
      return ((file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js') || file !== basename);
    });

  for (let i = 0; i < file.length; i++) {
    if (file[i].indexOf(".") === -1) {
      router.use(`/${file[i]}`, await sans.router(dirname, file[i]));
    }
    
    if(file[i].slice(-3) === ".js"){
      let name_app = file[i].split('.js')[0];
      const obj = await import(`file:///${dirname}/${file[i]}`);
      if (Object.keys(obj).find(x => x === "default")) {
        router.use(`/${name_app}`, obj.default);
      }else{
        router.use(`/${name_app}`, obj);
      }
    }
  }
}

export default () => {
  sans.config["routes"] = routes;
};
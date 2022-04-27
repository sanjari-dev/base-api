import fs from "fs";

const sort_app = (a, b) => {
  let order_app_a = Math.random() * 1000;
  let order_app_b = Math.random() * 1000;
  try {
    order_app_a = fs.readFileSync(`${directory.app}/${a}/.order`, {encoding:"utf8"});
  } catch (err) { }
  try {
    order_app_b = fs.readFileSync(`${directory.app}/${b}/.order`, {encoding:"utf8"});
  } catch (err) { }
  return order_app_a - order_app_b;
}

const filter_app = (x) => {
  let status = true;
  try {
    let a = fs.readFileSync(`${directory.app}/${x}/.status`, {encoding:"utf8"});
    if (a === "inactive") {
      status = false;
    }
  } catch (err) {}
  return status;
}

const name_app = {};
const version_app = {};

const keys = (x) => {
  return Object.keys(x);
}

const version_only = () => {
  const version_ = [];
  for (let i = 0; i < keys(name_app).length; i++) {
    for (let j = 0; j < keys(name_app[keys(name_app)[i]]).length; j++) {
      if (!version_.find(x => x === keys(name_app[keys(name_app)[i]])[j])) {
        version_.push(keys(name_app[keys(name_app)[i]])[j]);
      }
    }
  }
  return version_;
}

/**
 * Setup Global Sanari App
 */
export default async () => {
  global.app = {};

  const folder_app = fs
    .readdirSync(directory.app)
    .filter(file => file.indexOf(".") === -1)
    .sort(sort_app)
    .filter(filter_app);

  /**
   * Setup Name App
   */
  for (let i = 0; i < folder_app.length; i++) {
    const folder_app_version = fs
      .readdirSync(`${directory.app}/${folder_app[i]}`)
      .filter(file => file[0] === "v");

    name_app[folder_app[i]] = {};
    for (let j = 0; j < folder_app_version.length; j++) {
      name_app[folder_app[i]][folder_app_version[j]] = {};
    }
  }
  global.app_name = name_app;

  /**
   * Setup Version App
   */
  const version_ = version_only();
  for (let i = 0; i < version_.length; i++) {
    version_app[version_[i]] = {};
    for (let j = 0; j < keys(name_app).length; j++) {
      if (keys(name_app[keys(name_app)[j]]).find(x => x === version_[i])) {
        version_app[version_[i]][keys(name_app)[j]] = {};
      }
    }
  }
  global.app_version = version_app;

  /**
   * Setup App Client
   */
  for (let i = 0; i < keys(name_app).length; i++) {
    const temp_name_app = keys(name_app)[i];
    app[temp_name_app] = {};
    for (let j = 0; j < keys(name_app[temp_name_app]).length; j++) {
      const temp_version_app = keys(name_app[temp_name_app])[j];
      const folder_sanari_app = fs
        .readdirSync(`${directory.app}/${temp_name_app}/${temp_version_app}`)
        .filter(file => file.indexOf(".") === -1);
      app[temp_name_app][temp_version_app] = {};
      for (let index = 0; index < folder_sanari_app.length; index++) {
        if (!sans["bundle"].find(x => x == folder_sanari_app[index]) && folder_sanari_app[index] !== "routes") {
          const sub_sanari = `${directory.app}/${temp_name_app}/${temp_version_app}/${folder_sanari_app[index]}`;
          app[temp_name_app][temp_version_app][folder_sanari_app[index]] = await sans.sub_folder(sub_sanari);
        }
      }
      for (let index = 0; index < sans["bundle"].length; index++) {
        const sub_sanari = `${directory.app}/${temp_name_app}/${temp_version_app}/${sans["bundle"][index]}`;
        app[temp_name_app][temp_version_app][sans["bundle"][index]] = await sans.sub_folder(sub_sanari);
      }
    }
  }
  
  /**
   * Load Settings Function
   */
  for (let i = 0; i < keys(app).length; i++) {
    const temp_app = keys(app)[i];
    for (let j = 0; j < keys(app[temp_app]).length; j++) {
      const temp_version_app = keys(app[temp_app])[j];
      const settings = keys(app[temp_app][temp_version_app].setting);
      for (let index = 0; index < settings.length; index++) {
        await app[temp_app][temp_version_app]["setting"][settings[index]]();
      }
    }
  }
};
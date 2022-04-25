import my_module from "./../../module/index.mjs";

/**
 * Setup Global Sanari App
 */
export default async () => {
  for (let i = 0; i < sans["bundle"].length; i++) {
    const sub_sanari = `${directory.sanari}/${sans["bundle"][i]}`;
    sans[sans["bundle"][i]] = await my_module.sub_folder(sub_sanari);
  }
  sans["endpoint"] = await my_module.sub_folder(`${directory.sanari}/endpoint`);

  if (Object.keys(global).find(x => x === "app_use")) {
    app_use();
  }
  
};
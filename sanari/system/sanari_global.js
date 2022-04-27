import caller from "../../module/caller-file.js";

/**
 * Setup Global Sanari App
 */
export default async () => {
  for (let i = 0; i < sans["bundle"].length; i++) {
    const sub_sanari = `${directory.sanari}/${sans["bundle"][i]}`;
    sans[sans["bundle"][i]] = await sans.sub_folder(sub_sanari);
  }
  sans["caller"] = caller;
};
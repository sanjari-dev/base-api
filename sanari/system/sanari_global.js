import sub_folder from "../../module/sub-folder.js";

/**
 * Setup Global Sanari App
 */
export default async () => {
  for (let i = 0; i < sans["bundle"].length; i++) {
    const sub_sanari = `${directory.sanari}/${sans["bundle"][i]}`;
    sans[sans["bundle"][i]] = await sub_folder(sub_sanari);
  }
};
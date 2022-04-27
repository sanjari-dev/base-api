import { createRequire } from "module";
const require = createRequire(import.meta.url);

import sub_folder from "../../module/sub-folder.js";

import sanari_bundle from "./sanari_bundle.js";
import sanari_global from "./sanari_global.js";
import sanari_db_postgres from "./sanari_db_postgres.js";
import sanari_app from "./sanari_app.js";
import sanari_router from "./sanari_router.js";

export default {
  directory : () => {
    global.require = require;
    global.directory = {
      sanari : `${__basedir}/sanari`,
      app : `${__basedir}/app`,
      db : {
        postgres  : `${__basedir}/database/postgres`
      },
    }
    sans["sub_folder"] = sub_folder;
  },
  sanari_bundle,
  sanari_global,
  sanari_db_postgres,
  sanari_app,
  sanari_router,
}
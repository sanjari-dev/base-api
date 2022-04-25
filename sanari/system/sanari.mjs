import { createRequire } from 'module';
const require = createRequire(import.meta.url);

import sanari_bundle from "./sanari_bundle.mjs";
import sanari_global from "./sanari_global.mjs";
import sanari_db_postgres from "./sanari_db_postgres.mjs";
import sanari_app from "./sanari_app.mjs";
import sanari_router from "./sanari_router.mjs";

export default {
  directory : () => {
    sans["require"] = require;
    global.directory = {
      sanari : `${__basedir}/sanari`,
      app : `${__basedir}/app`,
      db : {
        postgres  : `${__basedir}/database/postgres`
      },
    }
  },
  sanari_bundle,
  sanari_global,
  sanari_db_postgres,
  sanari_app,
  sanari_router,
}
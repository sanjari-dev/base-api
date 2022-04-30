
export default (router, config, response_name, regex) => {
  if (sans.helpers.app.version() !== sans.helpers.app.version(sans.caller())) {
    throw "Endpoint Not Modifier";
  }

  const _ = sans.helpers.apps();

  _.helpers.endpoint_docs(sans.caller(), config, response_name, regex);
  _.helpers.endpoint_express(router, config, regex);

};
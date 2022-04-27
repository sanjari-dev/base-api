
export default (router, config, regex) => {
  if (sans.helpers.app.version() !== sans.helpers.app.version(sans.caller())) {
    throw "Endpoint Not Modifier";
  }

  const _ = sans.helpers.apps();

  _.helpers.endpoint_docs(sans.caller(), config);
  _.helpers.endpoint_express(sans.caller(), router, config, regex);

};
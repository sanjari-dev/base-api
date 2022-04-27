
export default (router, config, regex = "/") => {

  const _ = sans.helpers.apps();
  const method = _.helpers.method(sans.caller());

  router[method](`${regex}`, config.middleware);
}
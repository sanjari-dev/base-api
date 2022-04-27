
export default () => {
  sans["endpoint"] = {};
  const endpoint = sans.helpers.apps().endpoint;
  const keys_endpoint = Object.keys(endpoint);
  for (let i = 0; i < keys_endpoint.length; i++) {
    sans["endpoint"][keys_endpoint[i]] = endpoint[keys_endpoint[i]];
  }
};

export default (caller, config) => {
  
  const _ = sans.helpers.apps();

  const url = _.helpers.url(caller);
  const method = _.helpers.method(sans.caller());
  const tags = _.helpers.tags(caller, config.tags);
  
  if (!src_docs_v1["paths"][url]) {
    src_docs_v1["paths"][url] = {};
  }

  if (!src_docs_v1["paths"][url][method]) {
    src_docs_v1["paths"][url][method] = {};
  }

  src_docs_v1["paths"][url][method]["tags"] = tags;
  src_docs_v1["paths"][url][method]["summary"] = config.summary || url.split("/")[url.split("/").length - 1];
  src_docs_v1["paths"][url][method]["description"] = config.summary_description || "";
  src_docs_v1["paths"][url][method]["parameters"] = config.parameters || [];
  src_docs_v1["paths"][url][method]["deprecated"] = config.deprecated ? true : false;
  src_docs_v1["paths"][url][method]["security"] = config.security || [];
  
  if (config.request_body) {
    src_docs_v1["paths"][url][method]["requestBody"] = {};
    src_docs_v1["paths"][url][method]["requestBody"]["content"] = {};
    src_docs_v1["paths"][url][method]["requestBody"]["content"]["application/json"] = {};
    src_docs_v1["paths"][url][method]["requestBody"]["content"]["application/json"]["schema"] = {};
    src_docs_v1["paths"][url][method]["requestBody"]["content"]["application/json"]["schema"]["type"] = "object";
    src_docs_v1["paths"][url][method]["requestBody"]["content"]["application/json"]["schema"]["properties"] = config.request_body || {};
  }

  const response = {};
  const code_http = {
    "200": "Success",
    "400": "Bad Request",
    "401": "Not Authorized",
    "403": "Forbidden",
    "404": "Not Found",
    "500": "Server Error"
  };
  const _sanari = sans.helpers.app.sanari(caller)
    .map((x, i) => i > 3 ? x : undefined)
    .filter(x => x && x !== "index.js");

  _sanari.push(method);
  
  const response_default = _.response;
  let response_app = sans.helpers.apps(caller).response;
  for (let i = 0; i < _sanari.length; i++) {
    response_app = response_app[_sanari[i]] || {};
  }
  const keys_response_app = Object.keys(response_app || {});
  const keys_code_http = Object.keys(code_http);
  for (let i = 0; i < keys_code_http.length; i++) {
    const examples = {};
    if (keys_response_app.find(x => x === keys_code_http[i])) {
      const content = response_app[keys_code_http[i]];
      const keys_content = Object.keys(response_app[keys_code_http[i]]);
      for (let j = 0; j < keys_content.length; j++) {
        examples[keys_content[j]] = {
          "value": content[keys_content[j]]()
        }
      }
    }else{
      const content = response_default[keys_code_http[i]];
      const keys_content = Object.keys(response_default[keys_code_http[i]]);
      for (let j = 0; j < keys_content.length; j++) {
        examples[keys_content[j]] = {
          "value": content[keys_content[j]]()
        }
      }
    }
    response[keys_code_http[i]] = {
      "description" : code_http[keys_code_http[i]],
      "content": {
        "application/json": {
          "examples": examples
        }
      }
    };
  }
  src_docs_v1["paths"][url][method]["responses"] = response;

}
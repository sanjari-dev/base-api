

const post = (router, config) => {
  if (sans.helpers.app.version() !== sans.helpers.app.version(sans.caller())) {
    throw "Endpoint Not Modifier";
  }

  const url = sans.caller()
    .replaceAll("\\", "/")
    .replace(directory.app.replaceAll("\\", "/"), "")
    .replaceAll(sans.helpers.app.version() + "/routes/", "")
    .replaceAll("/index.js", "");
  
  const tags = [
    sans.helpers.app.name(sans.caller())
      .replace (/\w\S*/g, 
        (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
      )
  ]

  if (config.tags) {
    for (let i = 0; i < config.tags.length; i++) {
      if (!tags.find(x => x === config.tags[i])) {
        tags.push(config.tags[i]);
      }
    }
  }

  const method = "post";

  src_docs_v1["paths"][url] = {};
  src_docs_v1["paths"][url][method] = {}; 
  src_docs_v1["paths"][url][method]["tags"] = tags;
  src_docs_v1["paths"][url][method]["summary"] = config.summary || url.split("/")[url.split("/").length - 1];
  src_docs_v1["paths"][url][method]["description"] = config.summary_description || "";
  src_docs_v1["paths"][url][method]["parameters"] = config.parameters || [];
  src_docs_v1["paths"][url][method]["requestBody"] = {};
  src_docs_v1["paths"][url][method]["requestBody"]["content"] = {};
  src_docs_v1["paths"][url][method]["requestBody"]["content"]["application/json"] = {};
  src_docs_v1["paths"][url][method]["requestBody"]["content"]["application/json"]["schema"] = {};
  src_docs_v1["paths"][url][method]["requestBody"]["content"]["application/json"]["schema"]["type"] = "object";
  src_docs_v1["paths"][url][method]["requestBody"]["content"]["application/json"]["schema"]["properties"] = config.request_body || {};
  src_docs_v1["paths"][url][method]["deprecated"] = config.deprecated ? true : false;
  src_docs_v1["paths"][url][method]["security"] = config.security || [];

  const response = {};
  const code_http = {
    "200": "Success",
    "400": "Bad Request",
    "401": "Not Authorized",
    "403": "Forbidden",
    "404": "Not Found",
    "500": "Server Error"
  };
  const app_sanari = sans.helpers.app.sanari(sans.caller())
    .map((x, i) => i > 3 ? x : undefined)
    .filter(x => x && x !== "index.js");
  app_sanari.push(method);

  const response_default = sans.helpers.apps().response;
  const keys_response_default = Object.keys(response_default);

  let response_app = sans.helpers.apps(sans.caller()).response;
  for (let i = 0; i < app_sanari.length; i++) {
    response_app = response_app[app_sanari[i]];
  }
  const keys_response_app = Object.keys(response_app);

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

export default post;
const tags = (descriptions = "") => {
  const app_name = sans.helpers.app.name(sans.caller())
    .replace (/\w\S*/g, 
      (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    );

  src_docs_v1.tags.push(
    {
      "name" : app_name,
      "description" : descriptions
    }
  )
}

export default () => {
  global.src_docs_v1 = app.docs.v1.src.openapi;
  sans.helpers["tag"] = tags;
};
/**
 * Setup Global Sanari App
 */
export default () => {
  const bundle = [
    "setting",
    "i18n",
    "utils",
    "helpers",
    "response",
    "repository",
    "schema",
    "transformer",
    "controller",
    "middleware",
  ];
  sans["bundle"] = bundle;
};
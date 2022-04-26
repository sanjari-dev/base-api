/**
 * Setup Global Sanari App
 */
export default () => {
  const bundle = [
    "setting",
    "i18n",
    "utils",
    "config",
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
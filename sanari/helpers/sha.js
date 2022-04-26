import sha from "sha1";

/**
 * encryption function with sha1
 * @param {value} value
 * @returns return encryption string data
 */
export default (value) => {

  const key = "very-safe";
  if (typeof value !== "string") {
    value = "";
  }
  return sha(`${sha(key)}${value}`);
};
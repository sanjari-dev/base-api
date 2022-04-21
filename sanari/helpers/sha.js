const sha = require('sha1');

/**
 * encryption function with sha1
 * @param {value} value
 * @returns return encryption string data
 */
module.exports = (value) => {

  const key = 'very-safe';
  if (typeof value !== "string") {
    value = "";
  }
  return sha(`${sha(key)}${value}`);
};
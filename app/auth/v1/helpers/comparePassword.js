/**
 * function to check password and user password
 * @param {password} password from body request
 * @param {user} user from data
 * @returns boolean from compare password and user password
 */
export default (password, user) => {
  let compare = false;
  if (typeof password === "string" && user) {
    if (user.id && user.password) {
      let secret = sans.helpers.sha(`${user.id}-${password}`);
      compare = (secret === user.password);
    }
  }
  return compare;
};
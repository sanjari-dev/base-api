

const caller = () => {
  let filename;
  const _pst = Error.prepareStackTrace;
  Error.prepareStackTrace = function (err, stack) { return stack; };
  try {
    const err = new Error();
    let caller_file;
    let current_file;

    current_file = err.stack.shift().getFileName();
    current_file = err.stack.shift().getFileName();
    while (err.stack.length) {
      caller_file = err.stack.shift().getFileName();
      if(current_file !== caller_file) {
        filename = caller_file;
        break;
      }
    }
  } catch (err) {}
  Error.prepareStackTrace = _pst;

  if (filename.indexOf("file:///") !== -1) {
    return filename.replace("file:///", "");
  }
  return filename;
}

export default caller;
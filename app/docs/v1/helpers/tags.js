
export default (caller, tag) => {
  const tags = [
    sans.helpers.app.name(caller)
      .replace (/\w\S*/g, 
        (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
      )
  ]
  if (tag) {
    for (let i = 0; i < tag.length; i++) {
      if (!tags.find(x => x === tag[i])) {
        tags.push(tag[i]);
      }
    }
  }
  return tags;
}
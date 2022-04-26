
export default (data) => {
  if (!data) {
    return {};
  }
  return {
    id: parseInt(data.group.id),
    name: data.group.name,
    username: data.group.username,
    count: data.group.count,
    is_default: data.is_default
  };
}
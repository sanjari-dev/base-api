
export default (data) => {
  if (!data) {
    return {
      id: 1,
      name: "Admin",
      description: "this is description",
      count: 1,
      is_default: true
    };
  }
  return {
    id: parseInt(data.group.id),
    name: data.group.name,
    description: data.group.description,
    count: data.group.count,
    is_default: data.is_default
  };
}
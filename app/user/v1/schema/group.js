
export default (data) => {
  if (!data) {
    return {
      id: 1,
      name: "admin",
      description: "administrator",
      count: 1,
    };
  }
  return {
    id: parseInt(data.id),
    name: data.name,
    description: data.description,
    count: data.count,
  };
}

export default (data) => {
  const _ = sans.helpers.apps();

  if (!data) {
    return [
      {
        role: _.schema.role()
      }
    ];
  }

  const list = [];
  for (let i = 0; i < data.length; i++) {
    list.push(
      {
        role: _.schema.role(data[i])
      }
    );
  }
  return list;
}
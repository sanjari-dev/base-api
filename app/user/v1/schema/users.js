
export default (data) => {
  const _ = sans.helpers.apps();

  if (!data) {
    return [
      {
        user: _.schema.user()
      }
    ];
  }

  const list = [];
  for (let i = 0; i < data.length; i++) {
    list.push(
      {
        user: _.schema.user(data[i])
      }
    );
  }
  return list;
}
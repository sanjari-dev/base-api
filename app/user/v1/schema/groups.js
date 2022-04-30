
export default (data) => {
  const _ = sans.helpers.apps();

  if (!data) {
    return [
      {
        group: _.schema.group()
      }
    ];
  }

  const list = [];
  for (let i = 0; i < data.length; i++) {
    list.push(
      {
        group: _.schema.group(data[i])
      }
    );
  }
  return list;
}

export default (data) => {
  if (!data) {
    return {};
  }
  return {
    id: parseInt(data.id),
    name: data.name,
    username: data.username,
    email: data.email,
    phone_number: data.phone_number,
    image: data.profile
  };
}
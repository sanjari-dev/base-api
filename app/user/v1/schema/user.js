
export default (data) => {
  if (!data) {
    return {
      id: 1,
      name: "user",
      username: "username",
      email: "user@example.com",
      phone_number: "6281234567890",
      image: "image.png"
    };
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
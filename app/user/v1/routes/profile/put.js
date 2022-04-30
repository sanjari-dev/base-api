
export const middleware = async (req, res, next) => {
  
  const _ = sans.helpers.apps();

  // set middleware
  let middleware = [
    sans.middleware.x_access_token,
    sans.middleware.token,
    _.controller.profile.put
  ];

  // call middleware function custom
  sans.helpers.runMiddleware(middleware, req, res);
}

export const tags = [];
export const summary = "Profile User";
export const summary_description = "Profile User Account";
export const request_query = [];
export const request_body = {
  "name": {
    "type": "string",
    "example": "User Name"
  },
  "username": {
    "type": "string",
    "example": "username"
  },
  "email": {
    "type": "string",
    "format": "email",
    "example": "user@sanari.dev"
  },
  "phone_number": {
    "type": "string",
    "example": "6280000000000"
  },
  "image": {
    "type": "string",
    "example": "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
  }
};
export const deprecated = false;
export const security = [
  {
    "access_token": [],
    "token": []
  }
];

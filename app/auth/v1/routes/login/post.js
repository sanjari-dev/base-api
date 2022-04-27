
export const middleware = async (req, res, next) => {

  const _ = sans.helpers.apps();

  // set middleware
  let middleware = [
    sans.middleware.x_access_token,
    _.controller.login.post
  ];

  // call middleware function custom
  sans.helpers.runMiddleware(middleware, req, res);
}

export const tags = [];
export const summary = "Login Account";
export const summary_description = "Description For Login Account";
export const request_query = [];
export const request_body = {
  "email": {
    "type": "string",
    "format": "email"
  },
  "username": {
    "type": "string",
    "example": "username"
  },
  "password": {
    "type": "string",
    "example": "password"
  }
};
export const deprecated = false;
export const security = [
  {
    "access_token": []
  }
];

export const middleware = async (req, res, next) => {
  req.permission_name = "v1_post_auth_login";

  // set middleware
  let middleware = [
    sans.middleware.x_access_token,
    sans.helpers.apps().controller.login.post
  ];

  // call middleware function custom
  sans.helpers.runMiddleware(middleware, req, res);
}

export const tags = [];
export const summary = "Login Account";
export const summary_description = "Description For Login Account";
export const request_query = [
  // {
  //   "name": "email",
  //   "schema": {
  //     "type": "string",
  //     "format": "email",
  //     "example": "user@example.com"
  //   },
  //   "required": true
  // }
];
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

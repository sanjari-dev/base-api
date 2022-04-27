
export const middleware = async (req, res, next) => {
  
  const _ = sans.helpers.apps();

  // set middleware
  let middleware = [
    sans.middleware.x_access_token,
    sans.middleware.token,
    _.controller.password.patch
  ];

  // call middleware function custom
  sans.helpers.runMiddleware(middleware, req, res);
}

export const tags = [];
export const summary = "Change Password";
export const summary_description = "Change Password";
export const request_query = [];
export const request_body = {
  "new_password": {
    "type": "string",
    "example": "password"
  },
  "password": {
    "type": "string",
    "example": "password"
  }
};
export const deprecated = false;
export const security = [
  {
    "access_token": [],
    "token": []
  }
];

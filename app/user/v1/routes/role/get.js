
export const middleware = async (req, res, next) => {
  
  const _ = sans.helpers.apps();

  // set middleware
  let middleware = [
    sans.middleware.x_access_token,
    sans.middleware.token,
    _.controller.role.get
  ];

  // call middleware function custom
  sans.helpers.runMiddleware(middleware, req, res);
}

export const tags = [];
export const summary = "Role User";
export const summary_description = "Role User Account";
export const request_query = [];
export const deprecated = false;
export const security = [
  {
    "access_token": [],
    "token": []
  }
];

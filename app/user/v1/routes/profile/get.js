
export const middleware = async (req, res, next) => {
  
  const _ = sans.helpers.apps();

  // set middleware
  let middleware = [
    sans.middleware.x_access_token,
    sans.middleware.token,
    _.controller.profile.get
  ];

  // call middleware function custom
  sans.helpers.runMiddleware(middleware, req, res);
}

export const tags = [];
export const summary = "Profile User";
export const summary_description = "Profile User Account";
export const request_query = [];
export const deprecated = false;
export const security = [
  {
    "access_token": [],
    "token": []
  }
];


export const middleware = async (req, res, next) => {
  
  const _ = sans.helpers.apps();

  // set middleware
  let middleware = [
    sans.middleware.x_access_token,
    sans.middleware.token,
    _.controller.groups.post
  ];

  // call middleware function custom
  sans.helpers.runMiddleware(middleware, req, res);
}

export const tags = [];
export const summary = "Groups";
export const summary_description = "Group";
export const request_query = [];
export const request_body = {
  "name": {
    "type": "string",
    "example": "administrator"
  },
  "description": {
    "type": "string",
    "example": "username"
  }
};
export const deprecated = false;
export const security = [
  {
    "access_token": [],
    "token": []
  }
];

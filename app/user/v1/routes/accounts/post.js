
export const middleware = async (req, res, next) => {
  
  const _ = sans.helpers.apps();

  // set middleware
  let middleware = [
    sans.middleware.x_access_token,
    sans.middleware.token,
    _.controller.accounts.post
  ];

  // call middleware function custom
  sans.helpers.runMiddleware(middleware, req, res);
}

export const tags = [];
export const summary = "Users";
export const summary_description = "User Accounts";
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
  "password": {
    "type": "string",
    "example": "password"
  },
  "email": {
    "type": "string",
    "format": "email",
    "example": "user@sanari.dev"
  },
  "phone_number": {
    "type": "string",
    "example": "6280000000000"
  }
};
export const deprecated = false;
export const security = [
  {
    "access_token": [],
    "token": []
  }
];

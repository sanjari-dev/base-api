const request_body = {}
const request = []

request.push(
  {
    code: 200,
    try_it: [
      {
        response: {
          "success": true,
          "code": 200,
          "data": {},
          "message": "Hello Sanari",
          "token_expired": false
        }
      }
    ]
  }
);

module.exports = request;
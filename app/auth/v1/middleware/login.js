
import jwt from "jsonwebtoken";
import { body, validationResult, check } from "express-validator";

export default class M_Login
{
  static #_ini = undefined;
  
  constructor()
  {}

  store_validate(req, res, next)
  {
    const _ = sans.app().class;
    let middleware = [
      body("username")
        .custom((value, { req }) => 
          {
            const where_account = {};
            if (value) {
              if (req.body.username) {
                where_account.username = req.body.username;
              } else {
                where_account.email = value;
              }
            } else {
              if (req.body.username) {
                where_account.username = req.body.username;
              } else {
                throw new Error("username or email is required");
              }
            }
            req.where_account = where_account;
            return true;
          }
        ),
      body("password")
        .notEmpty()
        .withMessage('password is required')
        .isLength({ min: 3 })
        .withMessage('must be at least 3 chars long'),
      check("user")
        .custom(async (value, { req }) => 
          {
            let account = await db.user.account.findOne(
              {
                where: req.where_account
              }
            );
            if (!account) {
              if (Object.keys(req.where_account)[0] === "username") {
                if (!req.body.email) {
                  // response not found if not exist
                  throw new Error("Unregistered username or email");
                }
                // get account where option
                account = await db.user.account.findOne(
                  {
                    where: {
                      email : req.body.email
                    }
                  }
                );
                if (!account) {
                  // response not found if not exist
                  throw new Error("Unregistered username or email");
                }
              }
            }
            req.account = account;
            return true;
          }
        ),
      check("compare-password")
        .custom((value, { req }) => 
          {
            if (!
              _.helpers
              .password
              .compare(
                req.body.password, 
                { 
                  id: req.account?.id, 
                  password: req.account?.password 
                }
              )
            ) 
            {
              throw new Error("password doesn't match");
            }
            return true;
          }
        )
    ]
    return sans.helpers.middleware.run(middleware, next);
  }

  async store(req, res, next)
  {
    const response = sans.helpers.response;
    const _ = sans.app().class;
    try {

      const errors = validationResult.withDefaults({
        formatter: (error) => {
          let value = `${error.value}`;
          const password = ["password", "new_password"];
          if (password.find(x => x === error.param)) {
            value = value.split("").map(x => "*").join("");
          }
          return {
            value,
            message: error.msg,
            param: error.param,
            location: error.location,
            errors: error.nestedErrors || []
          };
        },
      })(req);

      if (!errors.isEmpty()) {
        const keys_mapped = Object.keys(errors.mapped())[0];
        const mapped = ["user", "compare-password"];
        for (let i = 0; i < mapped.length; i++) {
          if (keys_mapped === mapped[i]) {
            return response
              .errorNotAuth(
                errors.mapped()[mapped[i]].message,
                errors.array()
              );
          }
        }
        return response.errorBadRequest(
          errors.array()[0].message,
          errors.array()
        );
      }

      let account = req.account;

      // get all group in account
      let user_groups = await db.user.user_group.get(
        {
          where: {
            account_id: account.id
          }
        }
      );
      let roles = [];
      user_groups.forEach(x => {
        roles.push(
          {
            id: x.group.id,
            name: x.group.name,
            description: x.group.description,
            count: x.group.count,
            is_default: x.is_default
          }
        )
      });

      // data jwt only id account
      let data_jwt = {
        id: account.id
      };

      // option jwt
      let option = {
        expiresIn: _.utils.jwt.jwtExpiration
      }

      // create token jwt
      let token = jwt.sign(data_jwt, _.utils.jwt.secret_key, option);

      // set token to database
      token = await db.user.token.createToken(account.id, token);

      const data = {
        user: _.schema.user.get(account),
        roles: _.schema.role.list(roles),
        token
      };
      return response.success(data, "login has been successful");
    }

    // handle error code
    catch (err) {
      return response.errorServer(err);
    }
  }

  static setup()
  {
    if (!this.#_ini) {
      this.#_ini = new M_Login();
    }
    return this.#_ini;
  }
}
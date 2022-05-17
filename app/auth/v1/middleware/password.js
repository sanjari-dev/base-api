import { body, validationResult, check } from "express-validator";

export default class M_Login
{
  static #_ini = undefined;
  
  constructor()
  {}

  store_validate(req, res, next)
  {
    const _ = sans.app().class;
    const middleware = [
      body("new_password")
        .notEmpty()
        .withMessage("new password is required")
        .isLength({ min: 3 })
        .withMessage("must be at least 3 chars long")
    ];
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

      await db.user.account.update(
        {
          password: sans.helpers.sanari.sha(`${req.user.id}-${req.body.new_password}`)
        },
        {
          where: {
            id: req.user.id
          }
        }
      );

      const data = {};
      return response.success(data, "password changed successfully");
    }

    // handle error code
    catch (err) {
      return response.errorServer(err);
    }
  }

  change_validate(req, res, next)
  {
    const _ = sans.app().class;
    const middleware = [
      body("password")
        .notEmpty()
        .withMessage("password is required"),
      body("new_password")
        .notEmpty()
        .withMessage("new password is required")
        .isLength({ min: 3 })
        .withMessage("must be at least 3 chars long"),
      check("compare-password")
        .custom( async (value, { req }) => 
          {
            let account = await db.user.account.findByPk(req.user.id);
            if (!
              _.helpers
              .password
              .compare(
                req.body.password, 
                { 
                  id: account.id, 
                  password: account.password 
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

  async change(req, res, next)
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

      await db.user.account.update(
        {
          password: sans.helpers.sanari.sha(`${req.user.id}-${req.body.new_password}`)
        },
        {
          where: {
            id: req.user.id
          }
        }
      );

      const data = {};
      return response.success(data, "password changed successfully");
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
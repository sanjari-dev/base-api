import express from "express";
const router = express.Router();

/**
 * endpoint GET "/"
 */
router.get("/", async (req, res, next) => {

  /**
   * response sayHallo "Sample";
   * "Hallo Sample"
   */
  return sans.response.successData(res, {}, sans.helpers.sayHello("Sample Other Version"));
});

export default router;
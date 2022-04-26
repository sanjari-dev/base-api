import express from "express";
import swagger from "swagger-ui-express";

const router = express.Router();

router.use((req, res, next) => {
  src_docs_v1.servers[0].variables.protocol.default = req.protocol;
  src_docs_v1.servers[0].variables.host.default = req.hostname;
  src_docs_v1.externalDocs["url"] = `${req.protocol}://${req.headers.host}/api/v1/docs/download`;

  next();
});

/**
 * Endpoint for download docs api documentation
 */
router.get("/download", async (req, res) => {
  /**
   * directory file api documentation
   */
  res.json(src_docs_v1);
});


/**
 * Docs API with Swagger UI
 */
router.use("/",
  (req, res, next) => {
    next()
  },
  swagger.serve,
  (req, res, next) => {
    return swagger.setup(src_docs_v1, {
      swaggerOptions: {
        displayOperationId: true,
        plugins: [

        ]
      }
    })(req, res, next)
  },
);

export default router;
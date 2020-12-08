const apicache = require("apicache");
const cache = apicache.middleware;
const response = require("../../components/response");
const { body, param, query, validationResult } = require("express-validator");
const validator = require("../../middlewares/validator");
const express = require("express");
const router = express.Router();

const helloController = require("../../controllers/hello-controller");

const index = function (req, res, next) {
  response.res404(res);
};

router
  .route("/")
  .post(validator.postHelloValidationRules(), validator.validate, (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      response.res400(res, errors.array());
    } else {
      helloController(req, res, next)
        ? response.res200(res, "000", res.locals.message)
        : response.res200(res, "001", "");
    }
  });

router.all("*", index);

module.exports = router;

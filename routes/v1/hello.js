const apicache = require("apicache");
const cache = apicache.middleware;
const response = require("../../components/response");
const { body, param, query, validationResult } = require("express-validator");
const validator = require("../../middlewares/validator");
const express = require("express");
const router = express.Router();

const helloController = require("../../controllers/Hello");

const index = function (req, res, next) {
  response.res404(res);
};

router
  .route("/")
  .all(validator.postHelloValidationRules(), validator.validate, (req, res, next) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return response.res400(res, errors.array());
    } 

    helloController.hello(req, res).catch(error => {
        console.error(error);
        return response.res500(res, "Internal system error, please try again later!");
    });

  });

router.all("*", index);

module.exports = router;

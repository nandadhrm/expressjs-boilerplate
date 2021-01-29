const express = require("express");
const response = require("../components/response");
const router = express.Router();

const index = function (req, res, next) {
  response.res404(res);
};

router.use(
  "/api",
  function (req, res, next) {
    // Use token or any validation here.

    next();
  },
  require("./api")
);

router.all("/", index);
router.all("*", index);

module.exports = router;

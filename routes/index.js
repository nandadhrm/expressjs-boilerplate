const express = require("express");
const response = require("../components/response");
const router = express.Router();

// Load middlewares
const rateLimiter = require("../middlewares/rateLimiter");
const authenticate = require("../middlewares/authenticator");

const index = function (req, res, next) {
  response.res404(res);
};

router.use(
  "/api/v1",
  authenticate,
  rateLimiter,
  require("./v1")
);

router.all("/", index);
router.all("*", index);

module.exports = router;

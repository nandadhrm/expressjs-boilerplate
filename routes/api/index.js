const express = require("express");
const response = require("../../components/response");
const router = express.Router();

const index = function (req, res, next) {
  response.res404(res);
};

// router.all('/', index);

router.use("/hello", require("./hello"));

// router.all('*', index);

module.exports = router;

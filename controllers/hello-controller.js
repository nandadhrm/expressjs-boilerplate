"use strict";

module.exports = (req, res, next) => {
  res.locals.message = "Hello from Mooniverse!";
  return true;
};

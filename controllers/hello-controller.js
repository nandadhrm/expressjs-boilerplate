"use strict";
const response = require("../components/response");

module.exports = (req, res, next) => {
  let data = {
    name: "Erry Julio",
    url: "mooniverse.gitlab.io",
  };
  response.res200(res, "000", "Hello from Mooniverse!", data);
};

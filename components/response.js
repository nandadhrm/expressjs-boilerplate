"use strict";

exports.res200 = function (res, code = "000", message = "Operation success", data = {}) {
  var data = {
    statusCode: code,
    message: message,
    data: data,
  };

  res.status(200);
  res.json(data);
  res.end();
};

exports.res404 = function (res, values = "Resources not found") {
  var data = {
    message: values,
  };

  res.status(404);
  res.json(data);
  res.end();
};

exports.res400 = function (res, values = "Request error. Please read the API documentation.") {
  var data = {
    message: values,
  };

  res.status(400);
  res.json(data);
  res.end();
};

exports.res401 = function (
  res,
  values = "Forbidden. You're not allowed to access this resources."
) {
  var data = {
    message: values,
  };

  res.status(401);
  res.json(data);
  res.end();
};

exports.res500 = function (
  res,
  values = "Internal system failure. Please contact system administrator"
) {
  var data = {
    message: values,
  };

  res.status(500);
  res.json(data);
  res.end();
};

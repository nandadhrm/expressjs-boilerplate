const { body, param, query, validationResult } = require("express-validator");

exports.postHelloValidationRules = () => {
  return [
    // body("name").exists().withMessage("name is required"),
    // body("from").exists().withMessage("from is required"),
    // body("id").exists().withMessage("id is required"),
  ];
};

exports.validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  const extractedErrors = [];
  errors.array().map((err) => extractedErrors.push({ [err.param]: err.msg }));

  return res.status(400).json({
    errors: extractedErrors,
  });
};

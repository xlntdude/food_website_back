const { validationResult } = require("express-validator");

module.exports = (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return (res.status(400).send(error.array()));
  }
  next();
};

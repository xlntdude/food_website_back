const { check } = require("express-validator");
const resultValidation = require('./resultValidation');

const orderValidation = [
  check("order")
  .isArray(),

  resultValidation
];

module.exports = { orderValidation };

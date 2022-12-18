const { Schema, model } = require("mongoose");

const OrderSchema = Schema({
  order: {
    type: Array,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  cardholderName: {
    type: String,
    required: true,
  },
  cardNumber: {
    type: String,
    required: true,
  },
  expirationDate: {
    type: Object,
    required: true,
  },
});

module.exports = Order = model("FullOrder", OrderSchema);

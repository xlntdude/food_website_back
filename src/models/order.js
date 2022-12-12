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
});

module.exports = Order = model("Order", OrderSchema);

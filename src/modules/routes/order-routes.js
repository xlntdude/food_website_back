const { Router } = require("express");
const {
  orderValidation,
} = require("../../middlewares/orderValidation");
const OrderController = require("../controllers/order-controller");
const routes = new Router();

routes.post(
  "/order",
  OrderController.createAudit
);

module.exports = routes;

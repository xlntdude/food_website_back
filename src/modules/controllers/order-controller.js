const OrderService = require("../services/service-order");

class OrderController {
  async createAudit(req, res, next) {
    try {
      const { order } = req.body;
      console.log(order);
      await OrderService.createOrder(order);
      res.status(200).send("Ваш заказ был оформлен");
    } catch (error) {
      res.status(400).send("К сожалению, мы не можем сейчас оформить ваш заказ");
    }
  }
}

module.exports = new OrderController();
  
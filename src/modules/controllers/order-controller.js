const OrderService = require("../services/service-order");

class OrderController {
  async createAudit(req, res, next) {
    try {
      const { order, cardholderName, cardNumber, expirationDate } = req.body;
      console.log(order, cardholderName, cardNumber, expirationDate);

      await OrderService.createOrder({order, cardholderName, cardNumber, expirationDate});
      res.status(200).send("Ваш заказ был оформлен");
    } catch (error) {
      console.log(error);
      res.status(400).send("К сожалению, мы не можем сейчас оформить ваш заказ");
    }
  }
}

module.exports = new OrderController();
  
const Order = require("../../models/order");
const moment = require("moment");

class OrderService {
  async createOrder(order) {
    const date = moment().format('L');
    return await Order.create({
      order,
      date,
    });
  }
}

module.exports = new OrderService();

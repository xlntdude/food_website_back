const Order = require("../../models/order");
const moment = require("moment");

class OrderService {
  async createOrder(data) {
    const date = moment().format('L');
    return await Order.create({
      ...data,
      date,
    });
  }
}

module.exports = new OrderService();

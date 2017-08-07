const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
  channel: {
    type: String,
    required: true
  },
  invoice_number: {
    type: String,
    required: true
  },
  customer_name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  }
});

const Order = module.exports = mongoose.model('Order', orderSchema);

//Get Orders
module.exports.getOrders = (callback, limit) => {
  Order.find(callback).limit(limit).sort([['channel', 'ascending']]);
}

//Get Single Order
module.exports.getOrderById = (id, callback) => {
  Order.findById(id, callback);
}

//Add Order
module.exports.addOrder = (order, callback) => {
  const add = {
    channel: order.channel,
    invoice_number: order.invoice_number,
    customer_name: order.customer_name,
    description: order.description,
    status: order.status
    }
    Order.create(add, callback);
}

//Update Order
module.exports.updateOrder = (id, order, options, callback) => {
  const query = {_id: id};
  const update = {
    channel: order.channel,
    invoice_number: order.invoice_number,
    customer_name: order.customer_name,
    description: order.description,
    status: order.status
    }
    Order.findOneAndUpdate(query, update, options, callback);
}

//Remove Customer
module.exports.removeOrder = (id, callback) => {
  const query = {_id: id};
  Order.remove(query, callback);
}

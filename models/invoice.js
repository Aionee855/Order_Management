const mongoose = require('mongoose');

const invoiceSchema = mongoose.Schema({
  order: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Order'
  },
  item_number: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  quantity: {
    type: String,
    required: true
  },
  total: {
    type: String,
    required: true
  }
});

const Invoice = module.exports = mongoose.model('Invoice', invoiceSchema);

//Get Invoices
module.exports.getInvoices = (callback, limit) => {
  Invoice.find(callback).limit(limit).sort([['item_number', 'ascending']]);
}

//Get Invoice
module.exports.getInvoiceById = (order_id, callback, limit) => {
  Invoice.findById(id, callback);
}

//Get Customer Invoices
module.exports.getOrderInvoices = (order_id, callback, limit) => {
  const query = {order: order_id};
  Invoice.find(query, callback).limit(limit).sort([['item_number', 'ascending']]);
}

//Add Invoice
  module.exports.addInvoice = (invoice, callback) => {
    const add = {
      order: invoice.order,
      item_number: invoice.item_number,
      description: invoice.description,
      price: invoice.price,
      quantity: invoice.quantity,
      total: invoice.total
    }

    Invoice.create(add, callback);
  }

  //Update Customer
  module.exports.updateInvoice = (id, invoice, options, callback) => {
    const query = {_id: id};

    const update = {
      item_number: invoice.item_number,
      description: invoice.description,
      price: invoice.price,
      quantity: invoice.quantity,
      total: invoice.total
        }

      Invoice.findOneAndUpdate(query, update, options, callback);
    }

    //Remove Invoice
    module.exports.removeInvoice = (id, callback) => {
      const query = {_id: id};
      Invoice.remove(query, callback);
    }

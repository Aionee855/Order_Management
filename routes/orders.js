const express = require('express');
const router = express.Router();

Order = require('../models/order');

//Get All Orders
router.get('/', (req, res) => {
  Order.getOrders((err, orders) => {
    if(err){
      console.log(err);
      res.send(err);
    }
    res.json(orders);
  });
});

//Get Single Order
router.get('/:id', (req, res) => {
  Order.getOrderById(req.params.id, (err, order) => {
    if(err){
      console.log(err);
      res.send(err);
    }
    res.json(order);
  });
});

//Add Customer
router.post('/', (req, res) => {
  const order = req.body;
  Order.addOrder(order, (err, order) => {
    if(err){
      console.log(err);
      res.send(err);
    }
    res.json(order);
  });
});

//update Order
router.put('/:id', (req, res) => {
  const id = req.params.id;
  const order = req.body;
  Order.updateOrder(id, order, {}, (err, order) => {
    if(err){
      res.send(err);
    }
    res.json(order);
  });
});

//Delete Customer
router.delete('/:id', (req, res) => {
  const id = req.params.id;
  Order.removeOrder(id, (err, order) => {
    if(err){
      res.send(err);
    }
    res.json(order);
  });
});

module.exports = router;

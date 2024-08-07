const express = require('express');
const router = express.Router();
const Order = require('../models/order.model.js');

// crear una nueva orden
router.post('/', async (req, res) => {
  try {
    const newOrder = new Order(req.body);
    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// obtener todas las órdenes
router.get('/', async (req, res) => {
  try {
    const orders = await Order.find().populate('items.menuItem');
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// obtener una orden por ID
router.get('/:id', async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate('items.menuItem');
    if (!order) return res.status(404).json({ message: 'Orden no encontrada' });
    res.status(200).json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

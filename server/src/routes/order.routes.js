const express = require('express');
const router = express.Router();
const Order = require('../models/order.model.js');
const MenuItem = require('../models/menu.model.js');

// crear una nueva orden
router.post('/:companyId', async (req, res) => {
  try {
    const { companyId } = req.params;
    const { tableNumber, numberOfPeople, items, paymentMethod } = req.body;

    // Calcular el precio total
    let totalPrice = 0;
    for (let item of items) {
      const menuItem = await MenuItem.findById(item.menuItem);
      if (menuItem) {
        totalPrice += menuItem.price * item.quantity;
      }
    }

    const newOrder = new Order({
      tableNumber,
      numberOfPeople,
      items,
      totalPrice,
      paymentMethod,
      companyId
    });

    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Obtener todos los pedidos para un restaurante especifico
router.get('/company/:companyId', async (req, res) => {
  try {
    const { companyId } = req.params;
    const orders = await Order.find({ companyId }).populate('items.menuItem');
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Obtener un pedido específico por ID
router.get('/:id', async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate('items.menuItem');
    if (!order) return res.status(404).json({ message: 'Orden no encontrada.' });
    res.status(200).json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

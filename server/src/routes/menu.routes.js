const express = require('express');
const router = express.Router();
const MenuItem = require('../models/menu.model.js');

// crear un nuevo ítem del menú
router.post('/', async (req, res) => {
  try {
    const newItem = new MenuItem(req.body);
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// obtener todos los ítems del menú
router.get('/', async (req, res) => {
  try {
    const menuItems = await MenuItem.find();
    res.status(200).json(menuItems);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// obtener un ítem del menú por ID
router.get('/:id', async (req, res) => {
  try {
    const menuItem = await MenuItem.findById(req.params.id);
    if (!menuItem) return res.status(404).json({ message: 'Item not found' });
    res.status(200).json(menuItem);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

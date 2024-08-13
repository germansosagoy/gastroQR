const express = require('express');
const router = express.Router();
const MenuItem = require('../models/menu.model.js');

// crear un nuevo ítem del menú para un restaurante específico
router.post('/:companyId', async (req, res) => {
  try {
    const { companyId } = req.params;
    const newItem = new MenuItem({ ...req.body, companyId });
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// obtener todos los ítems del menú para un restaurante específico
router.get('/company/:companyId', async (req, res) => {
  try {
    const { companyId } = req.params;
    const menuItems = await MenuItem.find({ companyId });
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


// obtener el menú basado en el restaurantId desde un QR
router.get('/menu/:companyId', async (req, res) => {
  try {
    const { companyId } = req.params;
    const menuItems = await MenuItem.find({ companyId });
    if (!menuItems.length) return res.status(404).json({ message: 'No se han encontrado menús para este restaurante.' });
    res.status(200).json(menuItems);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


module.exports = router;

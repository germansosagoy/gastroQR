const Order = require('../models/order.model.js');
const MenuItem = require('../models/menu.model.js');

exports.getAdminView = async (req, res) => {
  try {
    const orders = await Order.find({ status: 'completado' }).populate('items.menuItem');
    const menuItems = await MenuItem.find();

    res.status(200).json({ orders, menuItems });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateMenuItem = async (req, res) => {
  const { id } = req.params;
  const { name, description, price, category, availability, imageUrl } = req.body;

  try {
    const menuItem = await MenuItem.findById(id);

    if (!menuItem) {
      return res.status(404).json({ message: 'Menu item no encontrado.' });
    }

    menuItem.name = name || menuItem.name;
    menuItem.description = description || menuItem.description;
    menuItem.price = price || menuItem.price;
    menuItem.category = category || menuItem.category;
    menuItem.availability = availability || menuItem.availability;
    menuItem.imageUrl = imageUrl || menuItem.imageUrl;

    const updatedMenuItem = await menuItem.save();
    res.status(200).json(updatedMenuItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

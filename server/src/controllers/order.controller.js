const Order = require('../models/order.model.js');
const io = require('../index.js');

exports.createOrder = async (req, res) => {
  const { tableNumber, items, totalPrice, paymentMethod, numberOfPeople } = req.body;

  try {
    const order = new Order({
      tableNumber,
      items,
      totalPrice,
      paymentMethod,
      numberOfPeople,
    });

    const createdOrder = await order.save();

    // emite la nueva orden al admin
    io.emit('newOrder', createdOrder);

    res.status(201).json(createdOrder);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

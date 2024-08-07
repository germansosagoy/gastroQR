const mongoose = require('mongoose');

const OrderItemSchema = new mongoose.Schema({
  menuItem: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'MenuItem',
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const OrderSchema = new mongoose.Schema({
  tableNumber: {
    type: Number,
    required: true,
  },
  numberOfPeople: {
    type: Number,
    required: true,
  },
  items: [OrderItemSchema],
  totalPrice: {
    type: Number,
    required: true,
  },
  paymentMethod: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['pendiente', 'completado', 'cancelado'],
    default: 'pendiente',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;

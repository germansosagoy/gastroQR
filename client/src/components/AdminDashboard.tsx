import React, { useEffect, useState } from 'react';
import socket from '../utils/socket';

interface Order {
  _id: string;
  tableNumber: number;
  numberOfPeople: number;
  items: { menuItem: string; quantity: number; }[];
  totalPrice: number;
  paymentMethod: string;
  status: string;
  createdAt: string;
}

const AdminDashboard: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    // escucha el evento 'newOrder' del servidor
    socket.on('newOrder', (order: Order) => {
      console.log('Hay una nueva orden recibida:', order);
      setOrders((prevOrders) => [...prevOrders, order]);
    });
    // limpiar la conexión cuando el componente se desmonte
    return () => {
      socket.off('newOrder');
    };
  }, []);

  return (
    <div>
      <h1 className='flex justify-center text-center font-semibold text-xl p-10'>Panel de Control del Administrador</h1>
      <ul className='flex justify-center text-center text-xl p-10 text-red-500'>
        {orders.map((order) => (
          <li key={order._id}>
            Orden {order._id} de la mesa {order.tableNumber}: {order.totalPrice} - {order.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;

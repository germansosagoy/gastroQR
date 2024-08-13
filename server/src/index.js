const express = require("express");
const http = require("http");
// const socketIo = require("socket.io");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db.js");
// rutas
const orderRoutes = require("./routes/order.routes.js");
const menuRoutes = require("./routes/menu.routes.js");
const authRoutes = require("./routes/auth.routes.js");
const adminRoutes = require("./routes/admin.routes.js");

dotenv.config();

const app = express();
const server = http.createServer(app);
// const io = socketIo(server);

// conectar a MongoDB
connectDB();

// middleware
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

app.use(express.json());

// rutas
app.use("/api/menu", menuRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);

// configuración socket.io
// io.on('connection', (socket) => {
//   console.log('Nuevo cliente conectado.');

//   // escuchar eventos de creación de ordenes
//   socket.on('ordenCreada', (order) => {
//     io.emit('newOrder', order);
//   });

//   socket.on('disconnect', () => {
//     console.log('Cliente desconectado');
//   });
// });

app.get("/", (req, res) => {
  res.send("Bienvenido a GastroQR API");
});

// iniciar el servidor
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

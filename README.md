
# Gastro QR

GastroQR es una aplicación web para restaurantes que permite a los clientes ver el menú, hacer pedidos y realizar pagos. Los administradores de la cocina pueden gestionar los menús y ver las órdenes en tiempo real.


## Stack

**Client:** Vite, TailwindCSS, Typescript, React


**Server:** Node.js, MongoDB, SocketIO, Express




### Flujo de trabajo
    1. Autenticación: los administradores deben autenticarse utilizando sus credenciales para recibir un token JWT.

    2. Gestión de Menús: Los administradores pueden crear, actualizar y eliminar menús. Los clientes pueden ver los menús disponibles.

    3. Creación de Órdenes: Los clientes pueden crear órdenes seleccionando ítems del menú y especificando detalles como la cantidad y el número de mesa.

    4. Notificaciones en Tiempo Real: Las órdenes creadas se notifican en tiempo real a los administradores utilizando Socket.IO.



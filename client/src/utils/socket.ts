import { io } from 'socket.io-client';

const SOCKET_SERVER_URL = 'http://localhost:3000';

const socket = io(SOCKET_SERVER_URL, {
  transports: ['websocket'],
});

export default socket;

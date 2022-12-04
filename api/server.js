const express = require('express');

const app = express();

const http = require('http');

const server = http.createServer(app);

const { Server } = require('socket.io');

const io = new Server(server, {
  cors: { origin: '*' },
});

io.on('connection', (socket) => {
  console.log('a user is connected');

  console.log(socket.id);

  socket.on('message', (message) => {
    console.log(message);

    io.emit('message', `${socket.id} said ${message}`);
  });
});

server.listen(4000, () => {
  console.log('running');
});

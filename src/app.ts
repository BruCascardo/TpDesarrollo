const express = require('express');
const handlebars = require('express-handlebars');
const app = express();
const { Server } = require('socket.io');
const path = require('path');
const logger = require('./logger');
const PORT = 9000;

app.use(express.json());

app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// Configurar Socket.io
const httpServer = app.listen(PORT, (err: Error) => {
  const localhostLink = `http://localhost:${PORT}/login`;
  if (err) logger.error(err);
  logger.info(`Escuchando en el puerto ${PORT}. Enlace: ${localhostLink}`);
});
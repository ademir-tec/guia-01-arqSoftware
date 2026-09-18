const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ mensaje: 'API guia-01-arqSoftware funcionando' });
});

module.exports = app;
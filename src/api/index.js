const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.sendFile(path.join(`${__dirname}/../public/index.html`));
});

app.use('/api/v1', require('../routers/index.js'));

module.exports = {
  app,
  PORT,
};

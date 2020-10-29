const express = require('express');
const morgan = require('morgan');
const path = require('path');
const celebrate = require('celebrate');
const { logDate } = require('../middleware/index.js');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(logDate);
app.use(morgan('dev'));
app.use(express.json({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(path.join(`${__dirname}/../public/index.html`));
});

app.use('/api/v1', require('../routers/index.js'));

app.use(celebrate.errors());

module.exports = {
  app,
  PORT,
};

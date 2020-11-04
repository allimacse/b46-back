const express = require('express');
const cors = require('cors');
const fs = require('fs');
const morgan = require('morgan');
const path = require('path');
const celebrate = require('celebrate');
const { logDate, errorHandler } = require('../middleware/index.js');

const app = express();
const PORT = process.env.PORT || 4000;

const accessLogStream = fs.createWriteStream(path.join(__dirname, '../../access.log'), { flags: 'a' });
app.use(morgan('combined', { stream: accessLogStream }));
app.use(cors());
app.use(logDate);
app.use(express.json({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(path.join(`${__dirname}/../public/index.html`));
});

app.use('/api/v1', require('../routers/index.js'));

app.use(celebrate.errors());

app.use(errorHandler);

module.exports = {
  app,
  PORT,
};

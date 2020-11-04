const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');
const APIError = require('../utils/error');

module.exports = {
  logDate: (req, res, next) => {
    const date = new Date();
    // eslint-disable-next-line no-console
    console.log(`${date.toLocaleTimeString()}`);
    next();
  },
  verifyToken(req, res, next) {
    try {
      const { authorization } = req.headers;
      const token = authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.decoded = decoded;
      next();
    } catch (error) {
      next(error.message);
    }
  },
  // eslint-disable-next-line no-unused-vars
  errorHandler: (err, req, res, next) => {
    console.error(err.stack);
    const accessLogStream = fs.createWriteStream(path.join(__dirname, '../../access.log'), { flags: 'a' });
    accessLogStream.write(`${err.stack} \n`, 'utf8');
    accessLogStream.end();
    // eslint-disable-next-line no-console
    if (err instanceof APIError) {
      res
        .status(err.statusCode)
        .json({ errorCode: err.statusCode, message: err.message });
    } else {
      res
        .status(500)
        .json({ errorCode: 500, message: err.message });
    }
  },
};

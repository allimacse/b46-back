const jwt = require('jsonwebtoken');

module.exports = {
  logDate: (req, res, next) => {
    const date = new Date();
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
};

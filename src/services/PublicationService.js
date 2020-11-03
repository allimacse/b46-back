const { Publication } = require('../models/index');

module.exports = {
  create: (body) => new Publication(body).save(),
  showAll: (userId) => Publication.find({ user: userId }),
};

const { User } = require('../models/index.js');

module.exports = {
  create: (body) => new User(body).save(),
  getAll: () => User.find(),
  get: (id) => User.findById(id),
  update: (user, body) => {
    Object.assign(user, body);
    return user.save();
  },
  deleteOne: (id) => User.findByIdAndDelete(id),
};

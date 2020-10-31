const { User } = require('../models/index.js');

module.exports = {
  signup: (body) => new User(body).save(),
  findOneByEmail: (email) => User.findOne({ email }),
  getAll: () => User.find(),
  get: (id) => User.findById(id),
  update: (user, body) => {
    Object.assign(user, body);
    return user.save();
  },
  deleteOne: (id) => User.findByIdAndDelete(id),
};

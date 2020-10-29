const { UserService } = require('../services/index.js');

module.exports = {
  // CREATE
  create: async (req, res, next) => {
    try {
      const { body } = req;
      const user = await UserService.create(body);
      res.status(201).json({ message: 'User created', payload: user });
    } catch (error) {
      next(error.message);
    }
  },
  // READ ALL
  getAll: async (req, res, next) => {
    try {
      const users = await UserService.getAll();
      res.json({ payload: users });
    } catch (error) {
      next(error.message);
    }
  },
  // READ
  get: async (req, res, next) => {
    try {
      const { params } = req;
      const user = await UserService.get(params.id);
      res.json({ payload: user });
    } catch (error) {
      next(error.message);
    }
  },
  // UPDATE
  update: async (req, res, next) => {
    try {
      const { params, body } = req;
      const user = await UserService.get(params.id);
      const userUpdated = await UserService.update(user, body);
      res.json({ payload: userUpdated });
    } catch (error) {
      next(error.message);
    }
  },
  // DELETE
  deleteOne: async (req, res, next) => {
    try {
      const { params } = req;
      await UserService.deleteOne(params.id);
      res.json({ message: 'User has been deleted' });
    } catch (error) {
      next(error.message);
    }
  },
};

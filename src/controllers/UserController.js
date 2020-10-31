const { UserService } = require('../services/index.js');
const auth = require('../utils/auth.js');

module.exports = {
  // CREATE
  signup: async (req, res, next) => {
    try {
      const { body } = req;
      const user = await UserService.signup(body);
      user.password = undefined;
      res.status(201).json({ message: 'User created', payload: user });
    } catch (error) {
      next(error.message);
    }
  },
  login: async (req, res, next) => {
    try {
      const { email, password } = req.body;
      const user = await UserService.findOneByEmail(email);
      if (!user) throw new Error('Error on credentials.');
      const isValid = auth.comparePasswords(password, user.password);
      if (!isValid) throw new Error('Error on credentials.');
      const token = auth.createToken(user);
      res.status(200).json({ message: 'Log in', payload: token });
    } catch (error) {
      next(error);
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

/* eslint-disable no-console */
const express = require('express');
const { UserController } = require('../controllers/index.js');
// const { UserValidator } = require('../validators/index.js');
const { verifyToken } = require('../middleware/index');

const router = express.Router();
// CREATE
// router.post('/users', UserValidator.create, UserController.create);
// READ ALL
router.get('/users', UserController.getAll);
// READ
router.get('/users/:id', UserController.get);
// UPDATE
router.patch('/users', verifyToken, UserController.update);
// DELETE
router.delete('/users', verifyToken, UserController.deleteOne);

module.exports = router;

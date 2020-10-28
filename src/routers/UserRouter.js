const express = require('express');
const { UserController } = require('../controllers/index.js');

const router = express.Router();

router.use(express.json({
  extended: true,
}));

router.get('/users', UserController.create);

module.exports = router;

const express = require('express');
const { PublicationController } = require('../controllers/index');
const { verifyToken } = require('../middleware/index');
const { PublicationValidator } = require('../validators/index');

const router = express.Router();

// Create Publication
router.post('/publications', verifyToken, PublicationValidator.create, PublicationController.create);

// Get All Publication
router.get('/publications', verifyToken, PublicationController.showAll);

module.exports = router;

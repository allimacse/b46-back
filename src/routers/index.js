const express = require('express');
const UserRouter = require('./UserRouter.js');
const AuthRouter = require('./AuthRouter.js');
const PublicationRouter = require('./PublicationRouter.js');

const router = express.Router();

router.use(UserRouter);
router.use(AuthRouter);
router.use(PublicationRouter);

module.exports = router;

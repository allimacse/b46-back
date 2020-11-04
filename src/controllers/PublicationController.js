const { PublicationService } = require('../services/index');

module.exports = {
  create: async (req, res, next) => {
    try {
      const { body, decoded } = req;
      body.user = decoded.id;
      const publication = await PublicationService.create(body);
      res.status(201).json({
        message: 'Publication created',
        payload: publication,
      });
    } catch (error) {
      next(error.message);
    }
  },
  showAll: async (req, res, next) => {
    try {
      const { decoded } = req;
      const publication = await PublicationService.showAll(decoded.id);
      res.json({
        payload: publication,
      });
    } catch (error) {
      next(error.message);
    }
  },
};

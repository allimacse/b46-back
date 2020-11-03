/* const { celebrate, Joi, Segments } = require('celebrate');

module.exports = {
  create: celebrate({
    [Segments.body]: Joi
      .object()
      .keys({
        description: Joi.string().required(),
        media_url: Joi.string().required(),
        place: Joi.string(),
      }),
  }),
};
 */

const { celebrate, Joi, Segments } = require('celebrate');

module.exports = {
  create: celebrate({
    [Segments.BODY]: Joi
      .object()
      .keys({
        description: Joi.string().max(100, 'utf8').required(),
        media_url: Joi.string().required(),
        place: Joi.string(),
      }),
  }),
};

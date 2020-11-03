const { celebrate, Joi, Segments } = require('celebrate');

module.exports = {
  signup: celebrate({
    [Segments.BODY]: Joi
      .object()
      .keys({
        email: Joi.string().email().required(),
        last_name: Joi.string().required(),
        first_name: Joi.string().required(),
        bith_date: Joi.date(),
        password: Joi.string().required(),
      }),
  }),
  login: celebrate({
    [Segments.BODY]: Joi
      .object()
      .keys({
        email: Joi.string().email().required(),
        password: Joi.string().required(),
      }),
  }),
  update: celebrate({
    [Segments.BODY]: Joi
      .object()
      .keys({
        email: Joi.string().email(),
        last_name: Joi.string(),
        first_name: Joi.string(),
        bith_date: Joi.date(),
        password: Joi.string(),
      }),
  }),
};

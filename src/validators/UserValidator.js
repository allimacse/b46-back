const { celebrate, Joi, Segments } = require('celebrate');

module.exports = {
  create: celebrate({
    [Segments.BODY]: Joi
      .object()
      .keys({
        emails: Joi.string().email().required(),
        last_name: Joi.string().required(),
        first_name: Joi.string().required(),
        birth_date: Joi.date(),
        password: Joi.string().required(),
      }),
  }),
};

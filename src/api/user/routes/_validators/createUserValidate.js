import Joi from "joi";

const createUserValidate = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    photo: Joi.string().uri(),
    enabled: Joi.boolean(),
  });

  schema
    .validateAsync(req.body)
    .then(() => {
      next();
    })
    .catch((error) => {
      res.status(400).json({ error: error.details[0].message });
    });
};

export default createUserValidate;

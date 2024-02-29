import Joi from "joi";

const updateUserValidate = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().optional(),
    email: Joi.string().email().optional(),
    password: Joi.string().optional(),
    photo: Joi.string().uri().optional(),
    enabled: Joi.boolean().optional(),
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

export default updateUserValidate;
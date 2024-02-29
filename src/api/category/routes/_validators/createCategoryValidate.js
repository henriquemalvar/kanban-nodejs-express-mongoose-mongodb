import Joi from "joi";

const createCategoryValidate = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    color: Joi.string().required(),
    user_id: Joi.string().optional(),
    enabled: Joi.boolean().optional().default(true),
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

export default createCategoryValidate;
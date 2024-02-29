import Joi from "joi";

const createTaskValidate = (req, res, next) => {
  const schema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    status: Joi.string().required(),
    user_id: Joi.string().hex().length(24).required(),
    categories_ids: Joi.array()
      .items(Joi.string().hex().length(24))
      .default([]),
    enabled: Joi.boolean().default(true),
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

export default createTaskValidate;

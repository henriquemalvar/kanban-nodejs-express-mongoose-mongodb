import Joi from "joi";

const updateTaskValidate = (req, res, next) => {
  const schema = Joi.object({
    title: Joi.string().optional(),
    description: Joi.string().optional(),
    status: Joi.string().optional(),
    user_id: Joi.string().hex().length(24).optional(),
    categories_ids: Joi.array()
      .items(Joi.string().hex().length(24))
      .default([]),
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

export default updateTaskValidate;

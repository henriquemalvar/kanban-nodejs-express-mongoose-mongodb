import Joi from "joi";

const deleteTaskValidate = (req, res, next) => {
  const schema = Joi.object({
    id: Joi.string().required(),
  });

  schema
    .validateAsync(req.params)
    .then(() => {
      next();
    })
    .catch((error) => {
      res.status(400).json({ error: error.details[0].message });
    });
};

export default deleteTaskValidate;

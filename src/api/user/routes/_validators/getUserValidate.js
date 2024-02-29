import Joi from 'joi';
const getUserValidate = async (req, res, next) => {
  const schema = Joi.object({
    id: Joi.string().length(24).required(),
  });

  try {
    await schema.validateAsync(req.params);
    next();
  } catch (error) {
    res.status(400).json({ error: error.details[0].message });
  }
};

export default getUserValidate;
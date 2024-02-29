import Joi from "joi";

const sessionValidate = (req, res, next) => {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().required(),
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

export default sessionValidate;
import Joi from "joi";

const updateCategoryValidate = (req, res, next) => {
    const schema = Joi.object({
        name: Joi.string().optional(),
        color: Joi.string().optional(),
        user_id: Joi.string().optional(),
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

export default updateCategoryValidate;
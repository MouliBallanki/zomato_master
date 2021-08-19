import joi from "joi";

export const validateSignup = (userData) => {
    const Schema = joi.object({
        fullname: joi.string().required().min(5),
        email: joi.string().email().required(),
        password: joi.string(),
        address: joi
            .array().
            items(joi.object({ detail: joi.string(), for: joi.string() })),
        phoneNumber:joi.number().max(12),
    })
    return Schema.validateAsync(userData);
}

export const validateSignin = (userData) => {
    const Schema = joi.object({
        email: joi.string().email().required(),
        password: joi.string().required().min(5),
    })
    return Schema.validateAsync(userData);
}
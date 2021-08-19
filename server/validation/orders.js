import joi from "joi";

export const validateOderData = (OrderData) => {
    const Schema = joi.object({
        user: joi.string(),
        orderDetails: joi.array().items(joi.object({
            _id:joi.string(),
            quantity: joi.number().required(),
            status: joi.string().required(),
            paymentDetails: joi.object({
                itemTotal: joi.string().required(),
                promo: joi.number().required(),
                tax: joi.number().required(),
            })

        }))
    })
    return Schema.validateAsync(OrderData);
}
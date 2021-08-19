import joi from "joi";

export const validateReviewData = (revData) => {
    const Schema = joi.object({
        reviewData: joi.string(),
    })
    return Schema.validateAsync(revData);
}
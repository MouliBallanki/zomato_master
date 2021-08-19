import joi from "joi";

export const validateFileData = (fileData) => {
    const Schema = joi.object({
        file:joi.string(),
    })
    return Schema.validateAsync(fileData);
}
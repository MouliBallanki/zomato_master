import joi from "joi";

export const validateRestaurantCity = (city) =>{
    const Schema = joi.object({
        city: joi.string().required(),

    })

    return Schema.validateAsync(city);
}


export const validateRestaurantSearchString = (searchString) =>{
    const Schema = joi.object({
        serachString: joi.string(),

    })

    return Schema.validateAsync(searchString);
}
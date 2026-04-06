import Joi from "joi";

export const carValidator = Joi.object({
    brand: Joi.string().pattern(/^[a-zA-Zа-яА-ЯёЁіІїЇєЄҐґ]+$/)
                     .min(1)
                     .max(20)
                     .required().messages({
            'string.pattern.base': 'Brand name must consists of only characters'
        }),

    price: Joi.number().min(0).max(1000000).required().messages({
        'string.min': 'Price must be greater than 0',
        'string.max': 'Price must be less than 1000000'
    }),
    year: Joi.number().min(1990).max(2026).required().messages({
        'string.min': 'Year must be greater than 1990',
        'string.max': 'Year must be less than 2026'
    })
});
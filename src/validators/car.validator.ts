import Joi from "joi";

export const carValidator = Joi.object({
    brand: Joi.string().pattern(/^[a-zA-Zа-яА-ЯіІїЇєЄҐґ]+$/)
                     .min(1)
                     .max(20)
                     .required().messages({
            'string.pattern.base': 'Brand name must consists of only characters'
        }),

    price: Joi.number().min(0).max(1000000).required().messages({
        'number.min': 'Price must be greater than 0',
        'number.max': 'Price must be less than 1000000'
    }),
    year: Joi.number().min(1990).max(new Date().getFullYear()).required().messages({
        'number.min': 'Year must be greater than 1990',
        'number.max': 'Year must be less than 2026'
    })
});
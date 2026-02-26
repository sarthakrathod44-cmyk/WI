// Pricing Request Validation Schemas
const { z } = require('zod');

const createPricingSchema = z.object({
    name: z.string().min(1, 'Pricing rule name is required'),
    itemId: z.string().min(1, 'Item ID is required'),
    price: z.number().positive('Price must be positive'),
});

module.exports = { createPricingSchema };

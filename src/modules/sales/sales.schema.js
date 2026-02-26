// Sales Request Validation Schemas
const { z } = require('zod');

const createSaleSchema = z.object({
    customerId: z.string().optional(),
    totalAmount: z.number().positive('Total amount must be positive'),
    status: z.string().default('pending'),
});

module.exports = { createSaleSchema };

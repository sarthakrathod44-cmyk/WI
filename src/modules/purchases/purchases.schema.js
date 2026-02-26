// Purchases Request Validation Schemas
const { z } = require('zod');

const createPurchaseSchema = z.object({
    supplierId: z.string().min(1, 'Supplier ID is required'),
    totalAmount: z.number().positive('Total amount must be positive'),
    status: z.string().default('pending'),
});

module.exports = { createPurchaseSchema };

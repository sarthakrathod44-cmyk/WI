// Suppliers Request Validation Schemas
const { z } = require('zod');

const createSupplierSchema = z.object({
    name: z.string().min(1, 'Supplier name is required'),
    email: z.string().email('Invalid email').optional(),
    phone: z.string().optional(),
    address: z.string().optional(),
});

module.exports = { createSupplierSchema };

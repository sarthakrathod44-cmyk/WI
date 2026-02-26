// Items Request Validation Schemas
const { z } = require('zod');

const createItemSchema = z.object({
    name: z.string().min(1, 'Item name is required'),
    categoryId: z.string().min(1, 'Category ID is required'),
    description: z.string().optional(),
});

module.exports = { createItemSchema };

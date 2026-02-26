// Users Request Validation Schemas
const { z } = require('zod');

const createUserSchema = z.object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(8, 'Password must be at least 8 characters'),
    name: z.string().min(2, 'Name must be at least 2 characters'),
    role: z.string().default('user'),
});

module.exports = { createUserSchema };

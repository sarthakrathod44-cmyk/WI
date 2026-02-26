// Environment Variables Validation with Zod
const { z } = require('zod');
require('dotenv').config();

const envSchema = z.object({
    NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
    PORT: z.string().default('3000').transform(Number),
    DATABASE_URL: z.string(),
    JWT_SECRET: z.string(),
    JWT_EXPIRY: z.string().default('7d'),
});

let env;
try {
    // attempting to validate all required variables; this will throw if any are missing/invalid
    env = envSchema.parse(process.env);
} catch (err) {
    // zod will produce a readable error message, but we can make it clearer
    console.error('Failed to load environment variables:');
    if (err.errors) {
        err.errors.forEach(e => console.error(`  ${e.path.join('.')}: ${e.message}`));
    } else {
        console.error(err);
    }
    process.exit(1);
}

module.exports = env;

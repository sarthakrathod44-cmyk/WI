// Zod Schema Validation Wrapper Middleware
const validateMiddleware = (schema) => {
    return (req, res, next) => {
        try {
            const validated = schema.parse(req.body);
            req.validated = validated;
            next();
        } catch (err) {
            res.status(400).json({ error: err.errors });
        }
    };
};

module.exports = validateMiddleware;

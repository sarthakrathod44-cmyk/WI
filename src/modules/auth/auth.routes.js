// Auth Routes
const express = require('express');
const router = express.Router();
const authController = require('./auth.controller');
const validateMiddleware = require('../../middlewares/validate.middleware');
const { loginSchema, registerSchema } = require('./auth.schema');

router.post('/register', validateMiddleware(registerSchema), authController.register);
router.post('/login', validateMiddleware(loginSchema), authController.login);

module.exports = router;

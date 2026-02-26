// Auth Controller
const authService = require('./auth.service');
const { successResponse, errorResponse } = require('../../utils/response');

const register = async (req, res, next) => {
    try {
        const user = await authService.register(req.body);
        successResponse(res, user, 'User registered successfully', 201);
    } catch (err) {
        errorResponse(res, err.message, 'Registration failed', 400);
    }
};

const login = async (req, res, next) => {
    try {
        const { user, token } = await authService.login(req.body);
        successResponse(res, { user, token }, 'Login successful');
    } catch (err) {
        errorResponse(res, err.message, 'Login failed', 401);
    }
};

module.exports = { register, login };

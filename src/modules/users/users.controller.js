// Users Controller
const usersService = require('./users.service');
const { successResponse, errorResponse } = require('../../utils/response');

const getUsers = async (req, res, next) => {
    try {
        const users = await usersService.getUsers();
        successResponse(res, users);
    } catch (err) {
        errorResponse(res, err.message, 'Failed to fetch users', 500);
    }
};

const createUser = async (req, res, next) => {
    try {
        const user = await usersService.createUser(req.body);
        successResponse(res, user, 'User created successfully', 201);
    } catch (err) {
        errorResponse(res, err.message, 'Failed to create user', 400);
    }
};

const getUserById = async (req, res, next) => {
    try {
        const user = await usersService.getUserById(req.params.id);
        if (!user) {
            return errorResponse(res, 'User not found', 'Not found', 404);
        }
        successResponse(res, user);
    } catch (err) {
        errorResponse(res, err.message, 'Failed to fetch user', 500);
    }
};

const updateUser = async (req, res, next) => {
    try {
        const user = await usersService.updateUser(req.params.id, req.body);
        successResponse(res, user, 'User updated successfully');
    } catch (err) {
        errorResponse(res, err.message, 'Failed to update user', 400);
    }
};

const deleteUser = async (req, res, next) => {
    try {
        await usersService.deleteUser(req.params.id);
        successResponse(res, null, 'User deleted successfully');
    } catch (err) {
        errorResponse(res, err.message, 'Failed to delete user', 400);
    }
};

module.exports = { getUsers, createUser, getUserById, updateUser, deleteUser };

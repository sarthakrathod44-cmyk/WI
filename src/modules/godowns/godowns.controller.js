// Godowns Controller
const godownsService = require('./godowns.service');
const { successResponse, errorResponse } = require('../../utils/response');

const getGodowns = async (req, res, next) => {
    try {
        const godowns = await godownsService.getGodowns();
        successResponse(res, godowns);
    } catch (err) {
        errorResponse(res, err.message, 'Failed to fetch godowns', 500);
    }
};

const getGodownById = async (req, res, next) => {
    try {
        const godown = await godownsService.getGodownById(req.params.id);
        if (!godown) {
            return errorResponse(res, 'Godown not found', 'Not found', 404);
        }
        successResponse(res, godown);
    } catch (err) {
        errorResponse(res, err.message, 'Failed to fetch godown', 500);
    }
};

const createGodown = async (req, res, next) => {
    try {
        const godown = await godownsService.createGodown(req.body);
        successResponse(res, godown, 'Godown created successfully', 201);
    } catch (err) {
        errorResponse(res, err.message, 'Failed to create godown', 400);
    }
};

const updateGodown = async (req, res, next) => {
    try {
        const godown = await godownsService.updateGodown(req.params.id, req.body);
        successResponse(res, godown, 'Godown updated successfully');
    } catch (err) {
        errorResponse(res, err.message, 'Failed to update godown', 400);
    }
};

const deleteGodown = async (req, res, next) => {
    try {
        await godownsService.deleteGodown(req.params.id);
        successResponse(res, null, 'Godown deleted successfully');
    } catch (err) {
        errorResponse(res, err.message, 'Failed to delete godown', 400);
    }
};

module.exports = { getGodowns, getGodownById, createGodown, updateGodown, deleteGodown };

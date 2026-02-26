// Counters Controller
const countersService = require('./counters.service');
const { successResponse, errorResponse } = require('../../utils/response');

const getCounters = async (req, res, next) => {
    try {
        const counters = await countersService.getCounters();
        successResponse(res, counters);
    } catch (err) {
        errorResponse(res, err.message, 'Failed to fetch counters', 500);
    }
};

const getCounterById = async (req, res, next) => {
    try {
        const counter = await countersService.getCounterById(req.params.id);
        if (!counter) {
            return errorResponse(res, 'Counter not found', 'Not found', 404);
        }
        successResponse(res, counter);
    } catch (err) {
        errorResponse(res, err.message, 'Failed to fetch counter', 500);
    }
};

const createCounter = async (req, res, next) => {
    try {
        const counter = await countersService.createCounter(req.body);
        successResponse(res, counter, 'Counter created successfully', 201);
    } catch (err) {
        errorResponse(res, err.message, 'Failed to create counter', 400);
    }
};

const updateCounter = async (req, res, next) => {
    try {
        const counter = await countersService.updateCounter(req.params.id, req.body);
        successResponse(res, counter, 'Counter updated successfully');
    } catch (err) {
        errorResponse(res, err.message, 'Failed to update counter', 400);
    }
};

const deleteCounter = async (req, res, next) => {
    try {
        await countersService.deleteCounter(req.params.id);
        successResponse(res, null, 'Counter deleted successfully');
    } catch (err) {
        errorResponse(res, err.message, 'Failed to delete counter', 400);
    }
};

module.exports = { getCounters, getCounterById, createCounter, updateCounter, deleteCounter };

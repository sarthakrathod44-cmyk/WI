// Stock Controller
const stockService = require('./stock.service');
const { successResponse, errorResponse } = require('../../utils/response');

const getStock = async (req, res, next) => {
    try {
        const stock = await stockService.getStock();
        successResponse(res, stock);
    } catch (err) {
        errorResponse(res, err.message, 'Failed to fetch stock', 500);
    }
};

const getStockByItemId = async (req, res, next) => {
    try {
        const stock = await stockService.getStockByItemId(req.params.itemId);
        if (!stock) {
            return errorResponse(res, 'Stock not found', 'Not found', 404);
        }
        successResponse(res, stock);
    } catch (err) {
        errorResponse(res, err.message, 'Failed to fetch stock', 500);
    }
};

const recordMovement = async (req, res, next) => {
    try {
        const movement = await stockService.recordMovement(req.body);
        successResponse(res, movement, 'Movement recorded successfully', 201);
    } catch (err) {
        errorResponse(res, err.message, 'Failed to record movement', 400);
    }
};

module.exports = { getStock, getStockByItemId, recordMovement };

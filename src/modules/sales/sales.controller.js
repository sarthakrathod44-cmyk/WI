// Sales Controller
const salesService = require('./sales.service');
const { successResponse, errorResponse } = require('../../utils/response');

const getSales = async (req, res, next) => {
    try {
        const sales = await salesService.getSales();
        successResponse(res, sales);
    } catch (err) {
        errorResponse(res, err.message, 'Failed to fetch sales', 500);
    }
};

const createSale = async (req, res, next) => {
    try {
        const sale = await salesService.createSale(req.body);
        successResponse(res, sale, 'Sale created successfully', 201);
    } catch (err) {
        errorResponse(res, err.message, 'Failed to create sale', 400);
    }
};

const getSaleById = async (req, res, next) => {
    try {
        const sale = await salesService.getSaleById(req.params.id);
        if (!sale) {
            return errorResponse(res, 'Sale not found', 'Not found', 404);
        }
        successResponse(res, sale);
    } catch (err) {
        errorResponse(res, err.message, 'Failed to fetch sale', 500);
    }
};

const updateSale = async (req, res, next) => {
    try {
        const sale = await salesService.updateSale(req.params.id, req.body);
        successResponse(res, sale, 'Sale updated successfully');
    } catch (err) {
        errorResponse(res, err.message, 'Failed to update sale', 400);
    }
};

const deleteSale = async (req, res, next) => {
    try {
        await salesService.deleteSale(req.params.id);
        successResponse(res, null, 'Sale deleted successfully');
    } catch (err) {
        errorResponse(res, err.message, 'Failed to delete sale', 400);
    }
};

module.exports = { getSales, createSale, getSaleById, updateSale, deleteSale };

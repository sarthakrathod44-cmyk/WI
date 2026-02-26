// Purchases Controller
const purchasesService = require('./purchases.service');
const { successResponse, errorResponse } = require('../../utils/response');

const getPurchases = async (req, res, next) => {
    try {
        const purchases = await purchasesService.getPurchases();
        successResponse(res, purchases);
    } catch (err) {
        errorResponse(res, err.message, 'Failed to fetch purchases', 500);
    }
};

const createPurchase = async (req, res, next) => {
    try {
        const purchase = await purchasesService.createPurchase(req.body);
        successResponse(res, purchase, 'Purchase created successfully', 201);
    } catch (err) {
        errorResponse(res, err.message, 'Failed to create purchase', 400);
    }
};

const getPurchaseById = async (req, res, next) => {
    try {
        const purchase = await purchasesService.getPurchaseById(req.params.id);
        if (!purchase) {
            return errorResponse(res, 'Purchase not found', 'Not found', 404);
        }
        successResponse(res, purchase);
    } catch (err) {
        errorResponse(res, err.message, 'Failed to fetch purchase', 500);
    }
};

const updatePurchase = async (req, res, next) => {
    try {
        const purchase = await purchasesService.updatePurchase(req.params.id, req.body);
        successResponse(res, purchase, 'Purchase updated successfully');
    } catch (err) {
        errorResponse(res, err.message, 'Failed to update purchase', 400);
    }
};

const deletePurchase = async (req, res, next) => {
    try {
        await purchasesService.deletePurchase(req.params.id);
        successResponse(res, null, 'Purchase deleted successfully');
    } catch (err) {
        errorResponse(res, err.message, 'Failed to delete purchase', 400);
    }
};

module.exports = { getPurchases, createPurchase, getPurchaseById, updatePurchase, deletePurchase };

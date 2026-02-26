// Suppliers Controller
const suppliersService = require('./suppliers.service');
const { successResponse, errorResponse } = require('../../utils/response');

const getSuppliers = async (req, res, next) => {
    try {
        const suppliers = await suppliersService.getSuppliers();
        successResponse(res, suppliers);
    } catch (err) {
        errorResponse(res, err.message, 'Failed to fetch suppliers', 500);
    }
};

const createSupplier = async (req, res, next) => {
    try {
        const supplier = await suppliersService.createSupplier(req.body);
        successResponse(res, supplier, 'Supplier created successfully', 201);
    } catch (err) {
        errorResponse(res, err.message, 'Failed to create supplier', 400);
    }
};

const getSupplierById = async (req, res, next) => {
    try {
        const supplier = await suppliersService.getSupplierById(req.params.id);
        if (!supplier) {
            return errorResponse(res, 'Supplier not found', 'Not found', 404);
        }
        successResponse(res, supplier);
    } catch (err) {
        errorResponse(res, err.message, 'Failed to fetch supplier', 500);
    }
};

const updateSupplier = async (req, res, next) => {
    try {
        const supplier = await suppliersService.updateSupplier(req.params.id, req.body);
        successResponse(res, supplier, 'Supplier updated successfully');
    } catch (err) {
        errorResponse(res, err.message, 'Failed to update supplier', 400);
    }
};

const deleteSupplier = async (req, res, next) => {
    try {
        await suppliersService.deleteSupplier(req.params.id);
        successResponse(res, null, 'Supplier deleted successfully');
    } catch (err) {
        errorResponse(res, err.message, 'Failed to delete supplier', 400);
    }
};

module.exports = { getSuppliers, createSupplier, getSupplierById, updateSupplier, deleteSupplier };

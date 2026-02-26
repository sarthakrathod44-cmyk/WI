// Items Controller
const itemsService = require('./items.service');
const { successResponse, errorResponse } = require('../../utils/response');

const getItems = async (req, res, next) => {
    try {
        const items = await itemsService.getItems();
        successResponse(res, items);
    } catch (err) {
        errorResponse(res, err.message, 'Failed to fetch items', 500);
    }
};

const createItem = async (req, res, next) => {
    try {
        const item = await itemsService.createItem(req.body);
        successResponse(res, item, 'Item created successfully', 201);
    } catch (err) {
        errorResponse(res, err.message, 'Failed to create item', 400);
    }
};

const getItemById = async (req, res, next) => {
    try {
        const item = await itemsService.getItemById(req.params.id);
        if (!item) {
            return errorResponse(res, 'Item not found', 'Not found', 404);
        }
        successResponse(res, item);
    } catch (err) {
        errorResponse(res, err.message, 'Failed to fetch item', 500);
    }
};

const updateItem = async (req, res, next) => {
    try {
        const item = await itemsService.updateItem(req.params.id, req.body);
        successResponse(res, item, 'Item updated successfully');
    } catch (err) {
        errorResponse(res, err.message, 'Failed to update item', 400);
    }
};

const deleteItem = async (req, res, next) => {
    try {
        await itemsService.deleteItem(req.params.id);
        successResponse(res, null, 'Item deleted successfully');
    } catch (err) {
        errorResponse(res, err.message, 'Failed to delete item', 400);
    }
};

module.exports = { getItems, createItem, getItemById, updateItem, deleteItem };

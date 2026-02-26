// Categories Controller
const categoriesService = require('./categories.service');
const { successResponse, errorResponse } = require('../../utils/response');

const getCategories = async (req, res, next) => {
    try {
        const categories = await categoriesService.getCategories();
        successResponse(res, categories);
    } catch (err) {
        errorResponse(res, err.message, 'Failed to fetch categories', 500);
    }
};

const createCategory = async (req, res, next) => {
    try {
        const category = await categoriesService.createCategory(req.body);
        successResponse(res, category, 'Category created successfully', 201);
    } catch (err) {
        errorResponse(res, err.message, 'Failed to create category', 400);
    }
};

const getCategoryById = async (req, res, next) => {
    try {
        const category = await categoriesService.getCategoryById(req.params.id);
        if (!category) {
            return errorResponse(res, 'Category not found', 'Not found', 404);
        }
        successResponse(res, category);
    } catch (err) {
        errorResponse(res, err.message, 'Failed to fetch category', 500);
    }
};

const updateCategory = async (req, res, next) => {
    try {
        const category = await categoriesService.updateCategory(req.params.id, req.body);
        successResponse(res, category, 'Category updated successfully');
    } catch (err) {
        errorResponse(res, err.message, 'Failed to update category', 400);
    }
};

const deleteCategory = async (req, res, next) => {
    try {
        await categoriesService.deleteCategory(req.params.id);
        successResponse(res, null, 'Category deleted successfully');
    } catch (err) {
        errorResponse(res, err.message, 'Failed to delete category', 400);
    }
};

module.exports = { getCategories, createCategory, getCategoryById, updateCategory, deleteCategory };

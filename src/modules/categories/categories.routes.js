// Categories Routes
const express = require('express');
const router = express.Router();
const categoriesController = require('./categories.controller');
const authMiddleware = require('../../middlewares/auth.middleware');
const validateMiddleware = require('../../middlewares/validate.middleware');
const { createCategorySchema } = require('./categories.schema');

router.get('/', categoriesController.getCategories);
router.post('/', authMiddleware, validateMiddleware(createCategorySchema), categoriesController.createCategory);
router.get('/:id', categoriesController.getCategoryById);
router.put('/:id', authMiddleware, validateMiddleware(createCategorySchema), categoriesController.updateCategory);
router.delete('/:id', authMiddleware, categoriesController.deleteCategory);

module.exports = router;

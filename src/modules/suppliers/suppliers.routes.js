// Suppliers Routes
const express = require('express');
const router = express.Router();
const suppliersController = require('./suppliers.controller');
const authMiddleware = require('../../middlewares/auth.middleware');
const validateMiddleware = require('../../middlewares/validate.middleware');
const { createSupplierSchema } = require('./suppliers.schema');

router.get('/', suppliersController.getSuppliers);
router.post('/', authMiddleware, validateMiddleware(createSupplierSchema), suppliersController.createSupplier);
router.get('/:id', suppliersController.getSupplierById);
router.put('/:id', authMiddleware, validateMiddleware(createSupplierSchema), suppliersController.updateSupplier);
router.delete('/:id', authMiddleware, suppliersController.deleteSupplier);

module.exports = router;

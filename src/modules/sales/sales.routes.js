// Sales Routes
const express = require('express');
const router = express.Router();
const salesController = require('./sales.controller');
const authMiddleware = require('../../middlewares/auth.middleware');
const validateMiddleware = require('../../middlewares/validate.middleware');
const { createSaleSchema } = require('./sales.schema');

router.get('/', salesController.getSales);
router.post('/', authMiddleware, validateMiddleware(createSaleSchema), salesController.createSale);
router.get('/:id', salesController.getSaleById);
router.put('/:id', authMiddleware, validateMiddleware(createSaleSchema), salesController.updateSale);
router.delete('/:id', authMiddleware, salesController.deleteSale);

module.exports = router;

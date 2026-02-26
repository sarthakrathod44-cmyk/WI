// Purchases Routes
const express = require('express');
const router = express.Router();
const purchasesController = require('./purchases.controller');
const authMiddleware = require('../../middlewares/auth.middleware');
const validateMiddleware = require('../../middlewares/validate.middleware');
const { createPurchaseSchema } = require('./purchases.schema');

router.get('/', purchasesController.getPurchases);
router.post('/', authMiddleware, validateMiddleware(createPurchaseSchema), purchasesController.createPurchase);
router.get('/:id', purchasesController.getPurchaseById);
router.put('/:id', authMiddleware, validateMiddleware(createPurchaseSchema), purchasesController.updatePurchase);
router.delete('/:id', authMiddleware, purchasesController.deletePurchase);

module.exports = router;

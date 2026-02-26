// Pricing Routes
const express = require('express');
const router = express.Router();
const pricingController = require('./pricing.controller');
const authMiddleware = require('../../middlewares/auth.middleware');
const validateMiddleware = require('../../middlewares/validate.middleware');
const { createPricingSchema } = require('./pricing.schema');

router.get('/', pricingController.getPricingRules);
router.post('/', authMiddleware, validateMiddleware(createPricingSchema), pricingController.createPricingRule);
router.get('/:id', pricingController.getPricingRuleById);
router.put('/:id', authMiddleware, validateMiddleware(createPricingSchema), pricingController.updatePricingRule);
router.delete('/:id', authMiddleware, pricingController.deletePricingRule);

module.exports = router;

// Stock Routes
const express = require('express');
const router = express.Router();
const stockController = require('./stock.controller');
const authMiddleware = require('../../middlewares/auth.middleware');

router.get('/', stockController.getStock);
router.get('/:itemId', stockController.getStockByItemId);
router.post('/movement/record', authMiddleware, stockController.recordMovement);

module.exports = router;

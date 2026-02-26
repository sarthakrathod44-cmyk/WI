// Items Routes
const express = require('express');
const router = express.Router();
const itemsController = require('./items.controller');
const authMiddleware = require('../../middlewares/auth.middleware');
const validateMiddleware = require('../../middlewares/validate.middleware');
const { createItemSchema } = require('./items.schema');

router.get('/', itemsController.getItems);
router.post('/', authMiddleware, validateMiddleware(createItemSchema), itemsController.createItem);
router.get('/:id', itemsController.getItemById);
router.put('/:id', authMiddleware, validateMiddleware(createItemSchema), itemsController.updateItem);
router.delete('/:id', authMiddleware, itemsController.deleteItem);

module.exports = router;

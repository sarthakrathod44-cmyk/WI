// Godowns Routes
const express = require('express');
const router = express.Router();
const godownsController = require('./godowns.controller');
const authMiddleware = require('../../middlewares/auth.middleware');

router.get('/', godownsController.getGodowns);
router.get('/:id', godownsController.getGodownById);
router.post('/', authMiddleware, godownsController.createGodown);
router.put('/:id', authMiddleware, godownsController.updateGodown);
router.delete('/:id', authMiddleware, godownsController.deleteGodown);

module.exports = router;

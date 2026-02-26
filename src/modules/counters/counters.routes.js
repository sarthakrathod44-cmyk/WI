// Counters Routes
const express = require('express');
const router = express.Router();
const countersController = require('./counters.controller');
const authMiddleware = require('../../middlewares/auth.middleware');

router.get('/', countersController.getCounters);
router.get('/:id', countersController.getCounterById);
router.post('/', authMiddleware, countersController.createCounter);
router.put('/:id', authMiddleware, countersController.updateCounter);
router.delete('/:id', authMiddleware, countersController.deleteCounter);

module.exports = router;

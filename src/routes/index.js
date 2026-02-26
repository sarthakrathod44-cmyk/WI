// Aggregates all module routes
const express = require('express');
const router = express.Router();

// Import module routes
const authRoutes = require('../modules/auth/auth.routes');
const categoriesRoutes = require('../modules/categories/categories.routes');
const itemsRoutes = require('../modules/items/items.routes');
const pricingRoutes = require('../modules/pricing/pricing.routes');
const suppliersRoutes = require('../modules/suppliers/suppliers.routes');
const purchasesRoutes = require('../modules/purchases/purchases.routes');
const salesRoutes = require('../modules/sales/sales.routes');
const stockRoutes = require('../modules/stock/stock.routes');
const usersRoutes = require('../modules/users/users.routes');
const countersRoutes = require('../modules/counters/counters.routes');
const godownsRoutes = require('../modules/godowns/godowns.routes');

// Register routes
router.use('/auth', authRoutes);
router.use('/categories', categoriesRoutes);
router.use('/items', itemsRoutes);
router.use('/pricing', pricingRoutes);
router.use('/suppliers', suppliersRoutes);
router.use('/purchases', purchasesRoutes);
router.use('/sales', salesRoutes);
router.use('/stock', stockRoutes);
router.use('/users', usersRoutes);
router.use('/counters', countersRoutes);
router.use('/godowns', godownsRoutes);

module.exports = router;

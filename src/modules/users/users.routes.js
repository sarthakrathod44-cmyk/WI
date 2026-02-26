// Users Routes
const express = require('express');
const router = express.Router();
const usersController = require('./users.controller');
const authMiddleware = require('../../middlewares/auth.middleware');
const validateMiddleware = require('../../middlewares/validate.middleware');
const { createUserSchema } = require('./users.schema');

router.get('/', authMiddleware, usersController.getUsers);
router.post('/', authMiddleware, validateMiddleware(createUserSchema), usersController.createUser);
router.get('/:id', authMiddleware, usersController.getUserById);
router.put('/:id', authMiddleware, validateMiddleware(createUserSchema), usersController.updateUser);
router.delete('/:id', authMiddleware, usersController.deleteUser);

module.exports = router;

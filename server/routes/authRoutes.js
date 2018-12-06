const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth');
const sessionController = require('../controllers/session');
const passwordController = require('../controllers/password');
const userController = require('../controllers/user');

router.post('/password/email', passwordController.sendResetLink);
router.post('/password/reset', passwordController.reset);

router.get('/user', userController.getCurrentUser);

router.post('/logout', sessionController.logout);
router.post('/logout/all', sessionController.logoutAll);

router.post('/login', authController.login);
router.post('/register', authController.register);

module.exports = router;

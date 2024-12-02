const express = require('express');
const router = express.Router();

// Importing controllers
const userController = require('../controllers/userController');
const slackController = require('../controllers/slackController');

// Define routes
router.get('/users', userController.getUsers);
router.post('/users', userController.createUser);

// slack route
router.get('/slacks', slackController.sendMessage);

module.exports = router;

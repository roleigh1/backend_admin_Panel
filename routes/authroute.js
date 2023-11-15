const express = require('express');
const { login } = require('../controllers/authController');
const counterDB = require('../controllers/countOrders');

const router = express.Router();

counterDB.countOrders() ; 
router.post('/login', login);

module.exports = router;
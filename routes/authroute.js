const express = require('express');
const  logintest  = require('../controllers/authController');
const counterDB = require('../controllers/countOrders');

const router = express.Router();

router.get("/counterDB", counterDB.countOrders) ; 
router.post('/login', logintest.login);
console.log("authroute")
module.exports = router;
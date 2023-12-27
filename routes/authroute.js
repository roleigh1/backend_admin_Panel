const express = require('express');
const  logintest  = require('../controllers/authController');
const counterDB = require('../controllers/countOrders');
const passport = require('passport');
const router = express.Router();
const displayLastOrder = require('../controllers/DisplayLastOrder')
router.get("/counterDB",passport.authenticate("jwt", { session: false }), counterDB.countOrders) ; 
router.get("/counterMonday",passport.authenticate("jwt" , {session: false}), counterDB.countCreatedAt);
router.post('/login',  logintest.login);
router.get("/lastOrder",displayLastOrder.getlastOrder)

module.exports = router;


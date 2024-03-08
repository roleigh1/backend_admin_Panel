const express = require('express');
const  logintest  = require('../controllers/authController');
const counterDB = require('../controllers/countOrders');
const salesReport = require('../controllers/SalesReport')
const passport = require('passport');
const router = express.Router();
const  multer = require("multer");
const insertData = require("../controllers/getInsertData")
const displayLastOrder = require('../controllers/DisplayLastOrder'); 
const storeInventory = require("../controllers/storeTables");
const orders = require("../controllers/orders"); 




router.get("/counterDB",counterDB.countOrders) ; 
router.get("/counterMonday", counterDB.countCreatedAt);
router.post('/login',  logintest.login);
router.get("/lastOrder",displayLastOrder.getlastOrder);
router.get("/totalMonths/:month",salesReport.getTotalMonth);
router.post("/deleteID",storeInventory.getDeleteID); 
router.post("/selectID",storeInventory.getSelectID); 
router.post("/updateData", storeInventory.updateTableData); 
router.get("/orders", orders.getAllOrders); 
router.post("/orders" , orders.finishOrder); 


module.exports = router;


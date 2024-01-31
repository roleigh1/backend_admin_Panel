const express = require('express');
const  logintest  = require('../controllers/authController');
const counterDB = require('../controllers/countOrders');
const salesReport = require('../controllers/SalesReport')
const passport = require('passport');
const router = express.Router();
const  multer = require("multer");
const insertData = require("../controllers/getInsertData")
const displayLastOrder = require('../controllers/DisplayLastOrder')

const upload = multer({ dest: "uploads/" });

router.get("/counterDB",counterDB.countOrders) ; 
router.get("/counterMonday", counterDB.countCreatedAt);
router.post('/login',  logintest.login);
router.get("/lastOrder",displayLastOrder.getlastOrder);
router.get("/totalPrice",salesReport.getTotalPrice);
router.get("/totalJan",salesReport.getTotalJan);
router.get("/totalFeb",salesReport.getTotalFeb);
router.get("/totalMar",salesReport.getTotalMar);
router.get("/totalApr",salesReport.getTotalApr);
router.get("/totalMay",salesReport.getTotalMay);
router.get("/totalJun",salesReport.getTotalJune);
router.get("/totalJul",salesReport.getTotalJuly);
router.get("/totalAug",salesReport.getTotalAug);
router.get("/totalSep",salesReport.getTotalSep);
router.get("/totalOct",salesReport.getTotalOct);
router.get("/totalNov",salesReport.getTotalNov);
router.get("/totalDec",salesReport.getTotalDec);
router.post("/insertData",insertData.insertNewProduct); 
router.post("/uploadImage",upload.single("image"), insertData.uploadImage)


module.exports = router;


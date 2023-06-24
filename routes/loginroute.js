const express = require("express");
const router = express.Router();
const path = require("path");
const bodyParser = require('body-parser')
const { toLoginForm, orderdetails, orderpage, tableInfo } = require("../controllers/loginController");

router.use(bodyParser.urlencoded({ extended: true }));

router.get("/", toLoginForm);

router.get("/orderdetails", orderpage);
router.post("/orderdetails", orderdetails);

router.get('/admin', tableInfo)


module.exports = router;

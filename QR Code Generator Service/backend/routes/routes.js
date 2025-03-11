const express = require("express");
const controllers=require("../controllers/controller.js");

const router = express.Router();

router.post('/generateQR',controllers.generateQR);

module.exports=router;
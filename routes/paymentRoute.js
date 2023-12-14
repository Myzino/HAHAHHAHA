const express = require('express');
const { createPayment, deletePayment, updatePayment, getPayment, getPayments} = require('../controllers/paymentContr.js'); 

const Payment = require("../models/paymentModel.js");
                                                                                                
const router = express.Router();

// Create
router.post("/", createPayment);

// Get Specific
router.get("/:id", getPayment);

// Get All
router.get("/", getPayments);

// Update
router.put("/:id", updatePayment);

//Delete
router.delete("/:id", deletePayment);



module.exports = router;
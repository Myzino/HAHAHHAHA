const express = require('express');
const { createShipping, deleteShipping, updateShipping, getShippings} = require('../controllers/shippingContr.js'); 

const Shipping = require("../models/shippingModel.js");
                                                                                                
const router = express.Router();

// Create
router.post("/", createShipping);

// Get Attendances
router.get("/", getShippings);

// Update
router.put("/:id", updateShipping);

//Delete
router.delete("/:id", deleteShipping);



module.exports = router;
const express = require('express');
const { createBid, deleteBid, updateBid, getBid, getBids} = require('../controllers/bidContr.js'); 

const Bid = require("../models/bidModel.js");
                                                                                                
const router = express.Router();

// Create
router.post("/", createBid);

// Get Specific
router.get("/:id", getBid);

// Get All
router.get("/", getBids);

// Update
router.put("/:id", updateBid);

//Delete
router.delete("/:id", deleteBid);



module.exports = router;
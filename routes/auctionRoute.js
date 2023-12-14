const express = require('express');
const { createAuction, deleteAuction, updateAuctionAndCreateNotification, getAuctions} = require('../controllers/auctionContr.js');


const Auction = require("../models/auctionModel.js");

const router = express.Router();

// Create
router.post("/", createAuction);

// Get All
router.get("/", getAuctions);

// Update
router.put("/:id", updateAuctionAndCreateNotification);

//Delete
router.delete("/:id", deleteAuction);

module.exports = router;
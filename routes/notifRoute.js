const express = require('express');
const { deleteNotification, updateNotification, getNotification, getNotifications} = require('../controllers/notificationContr.js'); 

                                                                                                
const router = express.Router();

// Get All
router.get("/", getNotifications);

// Get Specific
router.get("/:id", getNotification);

// Update
router.put("/:id", updateNotification);

//Delete
router.delete("/:id", deleteNotification);


module.exports = router;
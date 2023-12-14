const express = require('express');
const { createUser, deleteUser, updateUser, getUser, getUsers} = require('../controllers/userContr.js');

const router = express.Router();




// Create
router.post("/", createUser);

// Get All
router.get("/", getUsers);

// Get Specific
router.get("/:id", getUser);

// Update
router.put("/:id", updateUser);

//Delete
router.delete("/:id", deleteUser);



module.exports = router;
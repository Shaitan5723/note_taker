// Dependancies
const express = require('express');
const path = require('path');
const router = express.Router();

// Initialize express
const PORT = 3001;


router.get("/", (req,res) => {
 console.log("test")
 res.send("Test Successful")
})

module.exports = router;
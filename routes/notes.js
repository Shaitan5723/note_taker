// Dependancies
const express = require('express');
const path = require('path');
const notes = express.Router();


notes.get("*", (req,res) => {
 console.log("test")
 res.send("Test Successful")
})

module.exports = notes;
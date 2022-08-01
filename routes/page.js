// Dependancies
const express = require('express');
const path = require('path');
const page = express.Router();

// Returns the notes.html file
page.get("/notes", (req,res) => {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

// Returns the index.html file
page.get("*", (req,res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = page;
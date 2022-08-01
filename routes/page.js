// Dependancies
const express = require('express');
const path = require('path');
const page = express.Router();

// Returns the notes.html file
page.get("/notes", (req,res) => {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
  console.log("notes page accessed");
});

// Returns the index.html file
page.get("*", (req,res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
  console.log("homepage accessed");
});

module.exports = page;
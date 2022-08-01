// Dependancies
const express = require('express');
const path = require('path');
const notes = express.Router();
const crypto = require('crypto');
const fs = require ('fs');
const util = require('util')
const allNotes = require("../db/db.json")

// Utility functions writeToFile and readAndAppend

const readFromFile = util.promisify(fs.readFile);

const writeToFile = (destination, content) =>
  fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
    err ? console.error(err) : console.info(`\nData written to ${destination}`)
  );

const readAndAppend = (content, file) => {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
    } else {
      const parsedData = JSON.parse(data);
      parsedData.push(content);
      writeToFile(file, parsedData);
    }
  });
};


  
// GET Route for retrieving the notes
notes.get('/', (req, res) =>
  readFromFile('db/db.json').then((data) => 
  res.json(JSON.parse(data)))
);

notes.get('*', (req, res) =>
  readFromFile('db/db.json').then((data) => 
  res.json(JSON.parse(data)))
);

//Post Route for new notes
notes.post("*", (req,res) => {
  // Destructuring assignment for the items in req.body
const { title, text, id } = req.body;
// If all the required properties are present
if (title && text && id) {
    // Variable for the object we will save
    const newNote = {
      title,
      text,
      id: crypto.randomUUID(),
    };

    readAndAppend(newNote, './db/db.json');
    res.json(`Note added successfully`);
  } else {
    res.error('Error');
  }

  console.log(newNote);
  console.log("post function");
 
 })

module.exports = notes;
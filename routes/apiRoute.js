// Dependancies
const express = require('express');
const apiRoute = express.Router();
const crypto = require('crypto');
// const fs = require('fs');
const { readFromFile, readAndAppend  } = require('../helpers/utils');
  
// GET Route for retrieving the notes
apiRoute.get('/', (req, res) => {
  console.info(`${req.method} request received for notes`);
  readFromFile('./db/db.json').then((data) => 
  res.json(JSON.parse(data)))
});

apiRoute.get('/notes', (req, res) => {
  console.info(`${req.method} request received for notes`);
  readFromFile('./db/db.json').then((data) => 
  res.json(JSON.parse(data)))
});


//Post Route for new notes
apiRoute.post('/api/notes', (req,res) => {
  // Destructuring assignment for the items in req.body
const { title, text } = req.body;
// If all the required properties are present
if (title && text) {
    // Variable for the object we will save
    const newNote = {
      title,
      text,
      noteId: crypto.randomUUID(),
    };

    readAndAppend(newNote, '../db/db.json');
    res.json(`Note added successfully`);
  } else {
    res.error('Error');
  }

  console.log(newNote);
  console.log("New note added");
 
 })

module.exports = apiRoute;
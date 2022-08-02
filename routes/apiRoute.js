// Dependancies
const express = require('express');
const apiRoute = express.Router();
const crypto = require('crypto');

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
apiRoute.post('/notes', (req,res) => {
  // Destructuring assignment for the items in req.body
const { title, text} = req.body;

if (title && text) {
    // Variable for the object we will save
    const newNote = {
      title,
      text,
      id: crypto.randomUUID(),
    };

    readAndAppend(newNote, './db/db.json');
    console.log(newNote);
    console.log("New note added");
    res.json(`Note added successfully`);
  } else {
    res.error('Error');
  }
 
 })

module.exports = apiRoute;
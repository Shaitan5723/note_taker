// Dependancies
const express = require('express');
const path = require('path');
const noteRouter = require('./routes/notes');
const pageRouter = require('./routes/page');

// Initialize express
const PORT = 3001;
const app = express();

// Middleware for parsing JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Require routes file
app.use('/page', pageRouter);
app.use('/notes', noteRouter);


// Setup listener
app.listen(PORT, function() {
  console.log(`App listening on PORT: ${PORT}`);
}); 



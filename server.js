// Dependancies
const express = require('express');
const path = require('path');
const noteRouter = require('./routes/notes');

// Initialize express
const PORT = 3001;
const app = express();

// Middleware for parsing JSON
app.use(express.json());
// Require routes file
app.use('/notes', noteRouter);

// Setup listener
app.listen(PORT, function() {
  console.log(`App listening on PORT: ${PORT}`);
}); 



// Dependancies
const express = require('express');
const path = require('path');
const fs = require('fs');

// Initialize express
const PORT = 3001;
const app = express();

// Middleware for parsing JSON
app.use(express.json());

// Require routes file
require('./routes/routes')(app);

// Setup listener
app.listen(PORT, function() {
  console.log(`App listening on PORT: ${PORT}`);
}); 
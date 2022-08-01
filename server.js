// Dependancies
const express = require('express');
const noteRouter = require('./routes/notes');
const pageRouter = require('./routes/page');


// Initialize express
const PORT = 3001;
const app = express();

// Middleware for parsing JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Require routes file
app.use('/notes', noteRouter);
app.use('/', pageRouter);



// Setup listener
app.listen(PORT, function() {
  console.log(`App listening on PORT: ${PORT}`);
}); 



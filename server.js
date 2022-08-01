// Dependancies
const express = require('express');
const apiRouter = require('./routes/apiRoute');
const pageRouter = require('./routes/page');


// Initialize express
const PORT = process.env.PORT || 3000;
const app = express();

// Middleware for parsing JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Require routes file
app.use('/api', apiRouter);
app.use('/', pageRouter);



// Setup listener
app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
}); 



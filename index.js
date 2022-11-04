const express = require('express');
require('dotenv').config();
const { dbConnection } = require('./database/config')

// Create express server (app)
const app = express();

// Database
dbConnection();

// Public directory
app.use(express.static('public'));

// read & parsing body
app.use(express.json())

// Routes
app.use('/api/auth', require('./routes/auth'));

// Listen requests
app.listen(process.env.PORT, () => {
  console.log(`Server is running in ${process.env.PORT} port`);
});

const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { dbConnection } = require('./database/config');

// Create express server (app)
const app = express();

// Database
dbConnection();

// CORS
app.use(cors());
// Public directory
app.use(express.static('public'));

// read & parsing body
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/events'));

// Listen requests
app.listen(process.env.PORT, () => {
  console.log(`Server is running in ${process.env.PORT} port`);
});

const express = require('express');
require('dotenv').config();

// Create express server (app)
const app = express();

// Public directory
app.use(express.static('public'));

// Listen requests
app.listen(process.env.PORT, () => {
  console.log(`Server is running in ${process.env.PORT} port`);
});

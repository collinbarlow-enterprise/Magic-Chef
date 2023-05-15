//variables
const express = require('express');
const path = require('path');
const logger = require('morgan');
const ensureLoggedIn = require('./config/ensureLoggedIn');

require('dotenv').config();
require('./config/database');

const app = express();

//middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'dist')));

app.use(require('./config/checkToken'));

//routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/pantry', ensureLoggedIn, require('./routes/api/pantry'));
app.use('/api/recipes', ensureLoggedIn, require('./routes/api/recipes'));

//catch all
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

//listener
const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log(`Express app running on port ${port}`)
});
require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const errorHandler = require('_helpers/error-handler');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// put headers for cors, this (*) will allow any applications to access this server. 
// Change it to your application address to make it more secure
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// api routes. These are the exposed links that our applications can access
app.use('/data', require('./data/data.controller'));

// global error handler. This will handle any error and return it to the application
app.use(errorHandler);

// start server. Start on production port for heroku or port 3000 for dev environment
app.set('port', (process.env.PORT || 3000));

// Start listening for requests on 'port'
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

// var index = require('./routes/index');
// var user = require('./routes/user');
var file = require('./routes/file');
var fileUpload = require('express-fileupload');

User = require('./models/').User;
PdrnRequest = require('./models/').PdrnRequest;
// var userService = require('./app/services/user');
// var models = require('./models/');
// models.sequelize
//   .authenticate()
//   .then(function () {
//     console.log('Connection successful');
//   })
//   .catch(function(error) {
//     console.log("Error creating connection:", error);
//   });
// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(fileUpload());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 3000;        // set our port

// ROUTES FOR OUR API
// =============================================================================

app.get('/', function(req, res) {
  res.json({message: 'ok'});
});
app.get('/users', (req, res) => {
  User.findAll()
  .then(users => res.status(200).send(users))
  .catch(error => res.status(400).send(error));
});
app.get('/pdrn', (req, res) => {
  PdrnRequest.findAll({
    offset: 7000,
    limit: 10,
    // order: 'id DESC'
  })
  .then(users => res.status(200).send(users))
  .catch(error => res.status(400).send(error));
});
// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
// app.use('/', index);
// app.use('/users', user);
// app.use('/file', file);

// more routes for our API will happen here


// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);

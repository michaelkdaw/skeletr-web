var debug = require('debug')('skeletr:server');
var envVars = require('./config/envVars');

var app = require('./config/express')
  (__dirname,'skeletr',envVars['NODE_ENV']);

var mongoose = require('./data/mongoose')
  (envVars['MONGO_CONNECTION']);

// bring in the users module for authentication
// and authorization.
require('../../skeletr-users')(app,mongoose);

// add the basic routes (partials and catch-all)
require('./routes/serverRoutes')(app);

module.exports = app;
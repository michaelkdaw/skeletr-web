var passport = require('passport');
var LocalStrategy = require('passport-local');
var debug = require('debug')('skeletr:server');
var envVars = require('./config/envVars');

var app = require('./config/express')
  (__dirname,'skeletr',envVars['NODE_ENV']);

var mongoose = require('./data/mongoose')
  (envVars['MONGO_CONNECTION']);

require('../../skeletr-users')(app,mongoose);



var User = mongoose.model('User');


app.get('/app/*',function(req,res){
  res.render('../../public/app/' + req.params[0]);
});

app.get('*', function(req,res){
  res.render('index',{
    title: "Skeletr",
    FB_APP_ID: "10"
  });
});

module.exports = app;
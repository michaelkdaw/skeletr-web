var debug = require('debug')('skeletr:server');
var envVars = require('./config/envVars');

var app = require('./config/express')
  (__dirname,'skeletr',envVars['NODE_ENV']);

var mongoose = require('./data/mongoose')
  (envVars['MONGO_CONNECTION']);

app.get('/app/*',function(req,res){
  res.render('../../public/app/' + req.params[0]);
});

app.get('*', function(req,res){
  res.render('index',{
    title: "Skeletr"
  });
});

module.exports = app;
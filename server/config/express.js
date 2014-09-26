var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var stylus = require('stylus');
var expression = require('express-session');
var session = require('express-session');

module.exports = function(rootPath, appName, nodeEnv){

  var app = express();

  app.set('env',nodeEnv);

  function compile(str,path){
    return stylus(str).set('filename',path);
  }

// view engine setup
  app.set('views', path.join(rootPath, 'views'));
  app.set('view engine', 'jade');

  app.use(favicon(path.join(rootPath, '../public/favicon.ico')));
  app.use(logger('dev'));
  app.use(cookieParser());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(session({
    genid: function(req) {
      return "one"; // use UUIDs for session IDs
    },
    secret: 'csart',
    resave: true,
    saveUninitialized: true
  }));
//  app.use(passport.initialize());
//  app.use(passport.session());
  app.use(stylus.middleware(
    {
      src: rootPath + '/public',
      compile: compile
    }
  ));
  app.use(express.static(path.join(rootPath, '../public')));

  if(nodeEnv === 'herokudev'){
    console.log('redirect http to https');
    app.get('*',function(req,res,next){
      if(req.headers['x-forwarded-proto']!='https')
        res.redirect('https://' + appName + '.herokuapp.com'+req.url);
      else
        next();
    });
  }

  return app;

};
var debug = require('debug')('skeletr:server');
var envVars = require('../config/envVars');

module.exports = function(app){
  app.get('/app/*',function(req,res){
    res.render('../../public/app/' + req.params[0]);
  });

  app.get('*', function(req,res){
    console.log('currentUser: ' + JSON.stringify(req.user));
    var user = req.user;
    if(user) {
      user.hashed_pwd = undefined;
      user.salt = undefined;
    }
    res.render('index',{
      title: "Skeletr",
      FB_APP_ID: undefined,
      CURRENT_USER: req.user
    });
  });
};
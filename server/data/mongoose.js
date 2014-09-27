var debug = require('debug')('skeletr:mongoose');
var mongoose = require('mongoose');

module.exports = function(connectionString){

  if(!connectionString){
    debug('No connection string supplied. Skipping mongoose.')
    return null;
  }

  //mongodb://<user>:<pass>@<server>:<port>/<db name>
  debug("mongo string: " + connectionString);
  mongoose.connect(connectionString);
  var db = mongoose.connection;
  db.on('error',console.error.bind(console,'connection error...'));
  db.once('open',function callback(){
    debug('connection open');
  });

  return mongoose;
};
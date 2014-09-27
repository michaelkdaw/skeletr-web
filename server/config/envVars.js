var debug = require('debug')('skeletr:envVars');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
process.env.PORT = parseInt(process.env.PORT) || 3000;
process.env.MONGO_CONNECTION = process.env.MONGO_CONNECTION || '';

debug('NODE_ENV: ' + process.env['NODE_ENV'] );
debug('PORT:' + process.env['PORT']);
debug('MONGO_CONNECTION: ' + process.env['MONGO_CONNECTION']);
debug('DEBUG: ' + process.env['DEBUG']);

module.exports = process.env;
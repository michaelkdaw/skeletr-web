var envVars = {};

process.env.NODE_ENV = process.env.NODE_ENV || "development";
var mongoConnectionString = process.env.MONGO_CONNECTION;

console.log('env: ' + env);
console.log('mongo: ' + mongoConnectionString);

envVars["NODE_ENV"] = env;
envVars["MONGO_CONNECTION"] = mongoConnectionString;

module.exports = envVars;
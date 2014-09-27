define(['./../module'], function (module) {
  'use strict';
  module.factory('localService', ['$http','$q','identityService',
    function ($http,$q,identityService) {
      return {
        authenticateUser: function(username, password){
          var deferred = $q.defer();
          $http.post('/api/login',{
            username: username,
            password: password
          }).success(function(data,status){
            if(data.success){
              identityService.currentUser = data.user;
              deferred.resolve(true);
            } else {
              deferred.resolve(false);
            }
          }).error(function(data,status){
            if(status === 401){
              deferred.resolve(false);
            } else {
              deferred.resolve(false);
            }
          });
          return deferred.promise;
        }
      }
    }]);
});
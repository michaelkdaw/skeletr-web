define(['./../module'], function (module) {
  'use strict';
  module.factory('localService', ['$http','$q','identityService','userService',
    function ($http,$q,identityService,userService) {
      return {
        authenticateUser: function(username, password){
          var deferred = $q.defer();
          $http.post('/api/login',{
            username: username,
            password: password
          }).success(function(data,status){
            if(data.success){
              var user = new userService();
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
        },

        logoutUser: function(){
          var deferred = $q.defer();
          $http.post('/api/logout',{
            logout: true
          }).success(function(data,status){
            identityService.currentUser = undefined;
              deferred.resolve(true);
          }).error(function(data,status){
            deferred.resolve(false);
          });
          return deferred.promise;
        }
      }
    }]);
});
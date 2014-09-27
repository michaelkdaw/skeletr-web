define(['./../module'], function (module) {
  'use strict';
  module.factory('localService', ['$http','identityService','no'
    function ($http,identityService) {
      return {
        login: function(username, password){
          $http.post('/api/login',{
            username: username,
            password: password
          }).success(function(data,status){
            if(data.success){
              identityService.currentUser = data.user;
              notifierService.success(
                'You are now logged in.',
                  'Welcome ' + identityService.currentUser.username);

            } else {
              notifierService.error(
                'Unrecognized username/password.',
                'Failed to log in.');
            }
          }).error(function(data,status){
            if(status === 401){
              notifierService.error(
                'Failed to log in.',
                '401 - Unrecognized username/password.');
              return;
            }
            notifierService.error(
                'error: ' + status,
              'Internal Server Error');
          })
        }
      }
    }]);
});
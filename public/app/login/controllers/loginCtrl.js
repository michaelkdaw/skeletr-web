define(['./../module'], function (module) {
  'use strict';
  module.controller('loginCtrl', [
    '$scope',
    '$http',
    'notifierService',
    'identityService',
    'localService',
    function ($scope,$http,notifierService,identityService,localService) {
      $scope.identityService = identityService;
      $scope.login = function(username,password){
        localService.authenticateUser(username,password).
          then(function(success){
            if(success){
              notifierService.success(
                'You are now logged in.',
                'Welcome ' + identityService.currentUser.username);
            } else {
              notifierService.error(
                'Failed to log in.',
                'Please try again.');
            }
          });
      };
    }]);
});
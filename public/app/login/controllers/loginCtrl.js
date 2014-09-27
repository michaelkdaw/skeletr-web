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
      $scope.login = function(username, password){
        localService.login(username,password);
      };
    }]);
});
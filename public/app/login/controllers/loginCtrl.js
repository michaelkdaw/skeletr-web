define(['./../module'], function (module) {
  'use strict';
  module.controller('loginCtrl', ['$scope','facebookService',
    function ($scope,facebookService) {
      $scope.ctrlName = "loginCtrl";
      $scope.loginFacebook = function(){
        facebookService.login();
      }
    }]);
});
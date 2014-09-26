define(['./../module'], function (module) {
  'use strict';
  module.factory('facebookService', ['$window','docVarsService',
    function ($window,docVarsService) {
      alert(docVarsService);
      return{
        login: function(){
//          $window.location.href =
//            'https://www.facebook.com/dialog/oauth?' +
//            'client_id=486331038173579' +
//            '&redirect_uri=http://local.csart.herokuapp.com:3030/login-result/facebook' +
//            '&response_type=token%20granted_scopes'
        }
      }
    }]);
});
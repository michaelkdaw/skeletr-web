define(['./../module'], function (module) {
  'use strict';
  module.factory('facebookService', ['$window','docVarsService',
    function ($window,docVarsService) {
      alert(docVarsService.FB_APP_ID);
      return{
        login: function(){
          $window.location.href =
            'https://www.facebook.com/dialog/oauth?' +
            'client_id=' + docVarsService.FB_APP_ID
            '&redirect_uri=http://local.csart.herokuapp.com:3030/login-result/facebook' +
            '&response_type=token%20granted_scopes'
        }
      }
    }]);
});
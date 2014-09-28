define(['./../module'], function (module) {
  'use strict';
  module.factory('identityService', ['$window',
    function ($window) {
      var currentUser;
      if(!!$window.CURRENT_USER){
        currentUser = $window.CURRENT_USER;
      }
      return {
        currentUser: currentUser,
        isAuthenticated: function(){
          return !!this.currentUser;
        }
      }
    }]);
});
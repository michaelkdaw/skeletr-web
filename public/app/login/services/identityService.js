define(['./../module'], function (module) {
  'use strict';
  module.factory('identityService', [
    function () {
      return {
        currentUser: undefined,
        isAuthenticated: function(){
          return !!this.currentUser;
        }
      }
    }]);
});
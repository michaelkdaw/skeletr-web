define(['./../module'], function (module) {
  'use strict';
  module.factory('passwordService', [
    function () {
      return {
        doPasswordsMatch: function(password,confirm){
          return password === confirm;
        }
      }
    }]);
});
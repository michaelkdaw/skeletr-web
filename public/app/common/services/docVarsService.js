define(['./../module'], function (module) {
  'use strict';
  module.factory('docVarsService', ['$document',
    function ($window) {
      return {
        FB_APP_ID: $window.FB_APP_ID
      }
    }]);
});
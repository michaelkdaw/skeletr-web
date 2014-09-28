define(['./../module'], function (module) {
  'use strict';
  module.factory('userService', ['$resource',
    function ($resource) {
      var UserResource = $resource('/api/users/:id',{_id: "@id"});
      UserResource.prototype.isAdmin = function() {
        console.debug('checking for admin');
      };
      return UserResource;
    }]);
});
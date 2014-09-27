require.config({

  paths: {
    jquery: '../vendor/jquery/dist/jquery',
    angular: '../vendor/angular/angular',
    uiRouter: '../vendor/angular-ui-router/release/angular-ui-router',
    toastr: '../vendor/toastr/toastr'
  },

  shim: {
    'angular': {
      deps: ['jquery'],
      exports: 'angular'
    },
    'toastr':{
      exports: 'toastr',
      deps:['jquery']
    },
    uiRouter:['angular']
  }
});

require(  [
  'angular',
  'toastr',
  'uiRouter',
  './common/index',
  './home/index',
  './login/index'
  ], function(angular,toastr) {
  'use strict';

  var app = angular.module('app',[
    'ui.router',
    'app.common',
    'app.home',
    'app.login'
  ]);

  app.value('globalToastr',toastr);

  app.config(function(
    $stateProvider,
    $urlRouterProvider,
    $locationProvider
    ){
    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise("/home");
  });

  angular.bootstrap(document, ['app']);
});


/*

define(['./../module'], function (module) {
  'use strict';
  module.controller('loginCtrl', ['$scope',
    function ($scope) {
    }]);
});

define(['./../module'], function (module) {
  'use strict';
  module.factory('identityService', [
    function () {

    }]);
});

 */
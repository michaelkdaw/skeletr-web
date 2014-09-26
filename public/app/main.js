require.config({

  paths: {
    angular: '../vendor/angular/angular',
    uiRouter: '../vendor/angular-ui-router/release/angular-ui-router'
  },

  shim: {
    'angular': {
      exports: 'angular'
    },
    uiRouter:['angular']
  }
});

require(  [
  'angular',
  'uiRouter',
  './common/index',
  './home/index',
  './login/index'
  ], function(angular) {
  'use strict';

  var app = angular.module('app',[
    'ui.router',
    'app.common',
    'app.home',
    'app.login'
  ]);

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
require.config({

  paths: {
    angular: 'https://code.angularjs.org/1.2.16/angular',
    uiRouter: 'https://angular-ui.github.io/ui-router/release/angular-ui-router'
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
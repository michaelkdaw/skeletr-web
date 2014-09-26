define(['angular'], function (angular) {
  'use strict';
  var module = angular.module('app.login', ['ui.router','app.common']);

  module.config(function(
    $stateProvider,
    $urlRouterProvider,
    $locationProvider
    ){

    $stateProvider
      .state('home.login',{
        url: '/login',
        views:{
          'loginView@home': {
            templateUrl: '/app/login/views/navbarLogin',
            controller: 'loginCtrl'
          }
        }
      })

  });


  return module;
});
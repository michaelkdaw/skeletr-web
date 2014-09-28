define(['angular'], function (angular) {
  'use strict';
  var module = angular.module('app.home', ['ui.router']);

  module.config(function(
    $stateProvider,
    $urlRouterProvider,
    $locationProvider
    ){

    $stateProvider
      .state('home',{
        url: '/',
        views: {
          'homeView': {
            templateUrl: '/app/home/views/home',
            controller: 'homeCtrl'
          },
          'navView@home': {
            templateUrl: '/app/home/views/navbar'
          },
          'loginView@home': {
            templateUrl: '/app/login/views/navbarAuth',
            controller: 'loginCtrl'
          }
        }
      })
  });


  return module;
});
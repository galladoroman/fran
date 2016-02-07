'use strict';

/**
 * @ngdoc overview
 * @name franApp
 * @description
 * # franApp
 *
 * Main module of the application.
 */
angular
  .module('franApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/1grammaire', {
        templateUrl: 'views/1grammaire.html',
        controller: '1grammaireCtrl',
        controllerAs: '1grammaire'
      })
      .when('/1exercice', {
        templateUrl: 'views/1exercice.html',
        controller: '1exerciceCtrl',
        controllerAs: '1exercice'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

'use strict';

/**
 * @ngdoc overview
 * @name toDoListAngAppApp
 * @description
 * # toDoListAngAppApp
 *
 * Main module of the application.
 */
angular
  .module('toDoListAngAppApp', [
    'ngRoute',
    'ui.sortable',
    'LocalStorageModule'
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
      .otherwise({
        redirectTo: '/'
      });
  })
  .config(['localStorageServiceProvider', function(localStorageServiceProvider){
  localStorageServiceProvider.setPrefix('myList');
}]);

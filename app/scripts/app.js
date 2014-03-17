'use strict';

angular.module('angularLearning2App', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutcontrollerCtrl'
      })
      .when('/users', {
        templateUrl: 'views/users.html',
        controller: 'UserscontrollerCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

'use strict';

var app = angular.module('portfolio', [
  'ngRoute', 'appControllers'
]);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/about', {
        templateUrl: 'about.html',
        controller: 'aboutController'
      });
  }]);

var appControllers = angular.module('appControllers', []);

appControllers.controller('aboutController', ['$scope',
  function($scope) {
    $scope.message = 'LALALA'
  }]);
'use strict';

var App = angular.module('portfolio', [
  'ngRoute',
  'ngAnimate',
  'ngSanitize',
  'appControllers',
  'appDirectives',
  'appServices'
  ]);

App.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/work.html',
        controller: 'ProjectsListController'
      })
      .when('/resume', {
        templateUrl: 'partials/resume.html'
      })
      .when('/about', {
        templateUrl: 'partials/about.html'
      })
      .when('/contact', {
        templateUrl: 'partials/contact.html',
        controller: 'EmailFormController'
      })
      .when('/work/:projectName', {
        templateUrl: 'partials/details.html',
        controller: 'ProjectDetailController'
      })
      .otherwise({
        redirectTo: '/'
      })

      if(window.history && window.history.pushState){
        $locationProvider.html5Mode(true);
      }
  }]);



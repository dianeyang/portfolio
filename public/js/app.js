'use strict';

function filterProjects(filter) {
  $('#filters ul li a').removeClass('selected');
  $('#filters ul li #' + filter).addClass('selected');

  if(filter === 'all') {
    filter = '*';
  } else {
    filter = '.' + filter
  }

  $('#projects ul').isotope({filter: filter});
}

var App = angular.module('portfolio', ['ngRoute']);

App.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/about', {
        templateUrl: 'partials/about.html',
        controller: 'mainController'
      })
      .when('/resume', {
        templateUrl: 'partials/resume.html',
        controller: 'mainController'
      })
      .when('/contact', {
        templateUrl: 'partials/contact.html',
        controller: 'mainController'
      })
  }]);

App.controller('mainController', function($scope) {
})

App.directive('isotopeFiltering', function() {
    return {
        link: function() {
          filterProjects('all');

          $('#filters').on('click', 'ul li', function() {
            var filter = $(this).find('a').attr('id');
            filterProjects(filter);
          });
        }
    };
});
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
        templateUrl: '/about.html',
      })
      .when('/resume', {
        templateUrl: '/resume.html',
      })
      .when('/contact', {
        templateUrl: '/contact.html',
      })
      .when('/', {
       templateUrl : '/work.html',
      });
  }]);

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
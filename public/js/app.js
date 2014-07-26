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
        templateUrl: '/public/about.html',
      })
      .when('/resume', {
        templateUrl: '/public/resume.html',
      })
      .when('/contact', {
        templateUrl: '/public/contact.html',
      })
      .when('/', {
       templateUrl : '/public/work.html',
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
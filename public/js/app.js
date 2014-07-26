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

function loadOneByOne() {
  $('#projects ul li.project')
    .hide()
    .each(function (index) {
       $(this).delay(280*index).fadeIn(300);
    });
}

var App = angular.module('portfolio', ['ngRoute']);

App.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/work.html'
      })
      .when('/resume', {
        templateUrl: 'partials/resume.html',
      })
      .when('/about', {
        templateUrl: 'partials/about.html',
      })
      .when('/contact', {
        templateUrl: 'partials/contact.html',
      })
  }]);

App.controller('mainController', function($scope) {
})

App.directive('isotopeFiltering', function() {
    return {
        link: function() {
          filterProjects('all');

          loadOneByOne();

          $('#filters').on('click', 'ul li', function() {
            var filter = $(this).find('a').attr('id');
            filterProjects(filter);
          });
        }
    };
});
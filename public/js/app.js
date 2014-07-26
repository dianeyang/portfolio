'use strict';

function filterProjects(filter, container, filterClass) {
  $(filterClass).removeClass('selected');
  $(filterClass + '#' + filter).addClass('selected');

  if(filter === 'all') {
    filter = '*';
  } else {
    filter = '.' + filter
  }

  $(container).isotope({filter: filter});
}

function loadOneByOne(selector) {
  $(selector)
    .hide()
    .each(function (index) {
       $(this).delay(200*index).fadeIn(400);
    });
}

var App = angular.module('portfolio', ['ngRoute']);

App.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/work.html',
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

App.controller('mainController', ['$scope', function($scope) {}])

App.directive('isotopeFiltering', function() {
    return {
        link: function($scope, element, attrs) {
          // init isotope
          filterProjects('all', element, attrs.filters);

          // listen to filters
          $('#filters').on('click', 'ul li', function() {
            var filter = $(this).find('a').attr('id');
            filterProjects(filter, element, attrs.filters);
          });

          // remove event handlers upon destroy
          $(element).on('$destroy', function() {
            $(element).isotope('destroy');
          });
        }
    };
});

// fade in the children of the element one by one
App.directive('fadeInSequence', function() {
  return {
    link: function($scope, element, attrs) {
      $(element)
      .children()
      .hide()
      .each(function (index) {
         $(this).delay(100*index).fadeIn(300, 'linear');
      });
    }
  }
})

App.directive('fadeFromTop', function() {
  return {
    link: function($scope, element, attrs) {
      $(element)
      .css({opacity: 0, marginTop: '-=3px', paddingBottom: '+=3px'})
      .animate({opacity: 1, marginTop: '+=3px', paddingBottom: '-=3px'}, {duration: 500})
    }
  }
})
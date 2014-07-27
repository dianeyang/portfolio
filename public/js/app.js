'use strict';

var projects = [
  {
    "name": "project 1",
    "slug": "project1",
    "type": "code",
    "description": "lalala",
    "photos": [],
    "technologies": ["a", "b", "c"]
  },
  {
    "name": "project 2",
    "slug": "project2",
    "type": "art",
    "description": "lalala",
    "photos": [],
    "technologies": ["a","b","c"]
  },
  {
    "name": "project 3",
    "slug": "project3",
    "type": "design",
    "description": "lalala",
    "photos": [],
    "technologies": ["a","b","c"]
  },
  {
    "name": "project 4",
    "slug": "project4",
    "type": "code",
    "description": "lalala",
    "photos": [],
    "technologies": ["a","b","c"]
  },
  {
    "name": "project 5",
    "slug": "project5",
    "type": "art",
    "description": "lalala",
    "photos": [],
    "technologies": ["a","b","c"]
  },
  {
    "name": "project 6",
    "slug": "project6",
    "type": "art",
    "description": "lalala",
    "photos": [],
    "technologies": ["a","b","c"]
  },
  {
    "name": "project 7",
    "slug": "project7",
    "type": "code",
    "description": "lalala",
    "photos": [],
    "technologies": ["a","b","c"]
  },
  {
    "name": "project 8",
    "slug": "project8",
    "type": "art",
    "description": "lalala",
    "photos": [],
    "technologies": ["a","b","c"]
  },
  {
    "name": "project 9",
    "slug": "project9",
    "type": "design",
    "description": "lalala",
    "photos": [],
    "technologies": ["a","b","c"]
  },
  {
    "name": "project 10",
    "slug": "project10",
    "type": "code",
    "description": "lalala",
    "photos": [],
    "technologies": ["a","b","c"]
  },
  {
    "name": "project 11",
    "slug": "project11",
    "type": "design",
    "description": "lalala",
    "photos": [],
    "technologies": ["a","b","c"]
  },
]

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

var App = angular.module('portfolio', ['ngRoute', 'ngAnimate']);

App.config(['$routeProvider',
  function($routeProvider) {
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
        templateUrl: 'partials/contact.html'
      })
      .when('/projects/:projectName', {
        templateUrl: 'partials/details.html',
        controller: 'ProjectDetailController'
      })
      .otherwise({
        redirectTo: '/'
      })
  }]);

App.controller('ProjectsListController', ['$scope',
  function($scope) {
    $scope.projects = projects;
  }
]);

App.controller('ProjectDetailController', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    var slug = $routeParams.projectName;
    var result = projects.filter(function(elt) {
      return elt.slug === slug;
    })
    $scope.project = result[0];
  }
]);

// App.directive('onFinishRender', function ($timeout) {
//     return {
//         link: function($scope, element, $attr) {
//             if ($scope.$last === true) {
//                 $timeout(function () {
//                     $scope.$emit('ngRepeatFinished');
//                 });
//             }
//         }
//     }
// });

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
App.directive('staggeredFadeIn', ['$animate', function($animate) {
  return {
    link: function($scope, element, attrs) {
        $(element)
        .hide()
        .delay(100*attrs.index).fadeIn(300, 'linear');
      }
    }
  }
]);

App.directive('fadeFromTop', function() {
  return {
    link: function($scope, element, attrs) {
      $(element)
      .css({opacity: 0, marginTop: '-=3px', paddingBottom: '+=3px'})
      .animate({opacity: 1, marginTop: '+=3px', paddingBottom: '-=3px'}, {duration: 500})
    }
  }
});

App.animation('.fade-in-sequence', function() {
  return {
    enter: function(element, done) {
      console.log('jfkldsj');
    },
    move: function(element, done) {
      console.log('FJKLDSJ');
    }
  }
})

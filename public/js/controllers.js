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

var appControllers = angular.module('appControllers', []);

appControllers.controller('ProjectsListController', ['$scope',
  function($scope) {
    $scope.projects = projects;

    $scope.filters = [
      {label: 'All Work', id: 'all'},
      {label: 'Coding', id: 'code'},
      {label: 'Graphic Design', id: 'design'},
      {label: 'Art', id: 'art'}
    ];

    $scope.doFilter = function($event) {
      $('#filters a').removeClass('selected');
      $($event.delegateTarget).find('a').addClass('selected');

      var filter = $($event.delegateTarget).attr('id');

      if(filter === 'all') {
        filter = '*';
      } else {
        filter = '.' + filter
      }

      $('#projects ul').isotope({filter: filter});
    }
  }
]);

appControllers.controller('ProjectDetailController', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    var slug = $routeParams.projectName;
    var result = projects.filter(function(elt) {
      return elt.slug === slug;
    })
    $scope.project = result[0];
  }
]);

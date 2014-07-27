'use strict';

var appControllers = angular.module('appControllers', []);

appControllers.controller('ProjectsListController', ['$scope', 'Project',
  function($scope, Project) {
    $scope.projects = Project.query()
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

appControllers.controller('ProjectDetailController', ['$scope', '$routeParams', 'Project',
  function($scope, $routeParams, Project) {
    var slug = $routeParams.projectName;
    var result = projects.filter(function(elt) {
      return elt.slug === slug;
    })
    $scope.project = Project.get({projectName: $routeParams.projectName}, function(phone) {});
  }
]);

appControllers.controller('EmailFormController', ['$scope',
  function ($scope) {
    $scope.submitted = false;
    $scope.submitForm = function() {
      $scope.submitted = true;
    };
    $scope.hasError = function(field){
      var selector = 'input[name=' + field + ']';
      var invalid = ($scope.emailForm[field].$dirty && $scope.emailForm[field].$invalid)
        || ($scope.submitted && $scope.emailForm[field].$invalid);

      var blurred = !$(selector).is(':focus');

      return invalid
    };
  }
])
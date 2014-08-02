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

    $scope.isotopeInit = false;

    $scope.doFilter = function($event) {
      $('#filters a').removeClass('selected');
      $($event.delegateTarget).find('a').addClass('selected');

      var filter = $($event.delegateTarget).attr('id');

      if (!$scope.isotopeInit) {
        $('#projects ul').isotope();
        $scope.isotopeInit = true;
      }

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
    $scope.project = Project.get({projectName: $routeParams.projectName}, function(project) {});
  }
]);

appControllers.controller('EmailFormController', ['$scope',
  function ($scope) {
    $scope.submitted = false;

    $scope.submitForm = function() {
      $scope.submitted = true;
      $.ajax({  
          type: "POST",  
          url: "contact.php",  
          data: {
            name: $("input[name=name]").val(),
            email: $("input[name=email]").val(),
            subject: $("input[name=subject]").val(),
            message: $("textarea[name=message]").val()
          },  
          success: function() {  
              console.log('yayyyyy');
          },
          error: function() {
              console.log('hmmmm');               
          }
      });  

    };

    $scope.hasError = function(field){
      return ($scope.emailForm[field].$dirty && $scope.emailForm[field].$invalid)
        || ($scope.submitted && $scope.emailForm[field].$invalid);

    };
  }
])
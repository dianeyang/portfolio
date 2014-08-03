'use strict';

var appDirectives = angular.module('appDirectives', []);

appDirectives.directive('isotope', function () {
  return function(scope, element, attrs) {
    if (scope.$last){
    }
  };
});

appDirectives.directive('isotopeContainer', ['Isotope', function(Isotope){
  return {
    link: function(scope, elem, attrs) {
      scope.inited = false;
    },
    controller: function($scope) {
      this.isoInitOrRedraw = function(elem){
        if ($scope.inited === false) {
          Isotope.init('#projects ul')
        }
        $scope.inited = true;
      }
    },
  }
}])

appDirectives.directive('filterProjects', function() {
  return {
    link: function($scope, element, attrs) {
      var filter = $(element).find('a').attr('id');
      console.log($scope);

      if (filter === 'all') {
        filter = '*';
      } else {
        filter = '.' + filter;
      }

      $('#projects ul').isotope({filter: filter});
    }
  }
})

// fade in the children of the element one by one
appDirectives.directive('staggeredFadeIn', ['$animate', function($animate) {
  return {
    link: function($scope, element, attrs) {
        var index = $scope.$index+1;
        $(element)
          .hide()
          .delay(100*index).fadeIn(300, 'linear');
      }
    }
  }
]);

appDirectives.directive('fadeFromTop', function() {
  return {
    link: function($scope, element, attrs) {
      $(element)
        .css({opacity: 0, marginTop: '-=3px', paddingBottom: '+=3px'})
        .animate({opacity: 1, marginTop: '+=3px', paddingBottom: '-=3px'}, {duration: 500})
    }
  }
});

appDirectives.directive('scrollPosition', function() {
  return {
    scope: {
      scroll: '=scrollPosition'
    },
    link: function(scope, element, attrs) {
      var windowEl = angular.element(window);
      var handler = function() {
        scope.scroll = windowEl.scrollTop();
      }
      windowEl.on('scroll', scope.$apply.bind(scope, handler));
      handler();
    }
  };
})

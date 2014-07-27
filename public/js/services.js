var appServices = angular.module('appServices', ['ngResource']);

appServices.service('Isotope', function(){
  this.init = function(container) {
    console.log('initing isotope');
    $(container).isotope();
  }
});

appServices.factory('Project', ['$resource',
  function($resource){
    return $resource('projects/:projectName.json', {}, {
      query: {method:'GET', params:{projectName:'projects'}, isArray:true}
    });
  }]);

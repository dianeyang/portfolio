var appServices = angular.module('appServices', ['ngResource']);

appServices.service('Isotope', function(){
  this.init = function(container) {
    console.log('initing isotope');
    $(container).isotope();
  }
});

appServices.factory('Project', ['$resource',
  function($resource){
    return $resource('projects/:projectId.json', {}, {
      query: {method:'GET', params:{projectId:'projects'}, isArray:true}
    });
  }]);

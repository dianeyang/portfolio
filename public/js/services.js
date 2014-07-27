var appServices = angular.module('appServices', []);

appServices.service('Isotope', function(){
  this.init = function(container) {
    console.log('initing isotope');
    $(container).isotope();
  }
});
$(document).ready(function() {
	'use strict';

	/************************
	 *
	 * isotope filtering
	 *
	 ************************/

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

	// init isotope
	$('#projects ul').isotope({filter: '*'})

	$('#filters').on('click', 'ul li', function() {
		var filter = $(this).find('a').attr('id');
		filterProjects(filter);
	});

	/************************
	 *
	 * angular routing
	 *
	 ************************/

	//  app.config(['$routeProvider', function($routeProvider) {
	// 	$routeProvider
	// 		// route for the home page
	// 		.when('/', {
	// 			templateUrl : 'work.html',
	// 			controller  : 'mainController'
	// 		})

	// 		// route for the resume page
	// 		.when('/resume', {
	// 			templateUrl : 'resume.html',
	// 			controller  : 'resumeController'
	// 		})

	// 		// route for the about page
	// 		.when('/about', {
	// 			templateUrl : 'about.html',
	// 			controller  : 'aboutController'
	// 		})

	// 		// route for the contact page
	// 		.when('/contact', {
	// 			templateUrl : 'contact.html',
	// 			controller  : 'contactController'
	// 		});
	// }]);

	// // create the controller and inject Angular's $scope
	// app.controller('mainController', function($scope) {
	// 	$scope.message = 'Everyone come and see how good I look!';
	// });

	// app.controller('resumeController', function($scope) {
	// 	$scope.message = 'Look! This is my resume.';
	// });

	// app.controller('aboutController', function($scope) {
	// 	$scope.message = 'Look! I am an about page.';
	// });

	// app.controller('contactController', function($scope) {
	// 	$scope.message = 'Contact us! JK. This is just a demo.';
	// });


})
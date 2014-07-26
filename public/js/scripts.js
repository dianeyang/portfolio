$(document).ready(function() {

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

	$('#filters').on('click', 'ul li a', function() {
		filter = $(this).attr('id');
		filterProjects(filter);
	});

})
$(document).ready(function() {
	$('#projects').on('click', function(){
		$('#slider #slides').animate({'margin-left': '-100%'}, 1000);
	});

	$('#contact').on('click', function(){
		$('#slider #slides').animate({'margin-left': '-200%'}, 1000);
	});

	$('#about').on('click', function(){
		$('#slider #slides').animate({'margin-left': '0em'}, 1000);
	})
});

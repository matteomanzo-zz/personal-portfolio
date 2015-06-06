$(document).ready(function() {
	$('#projects').on('click', function(){
		$('#slider #slides').animate({'margin-left': '-60.05em'}, 1000);
	});
	
	$('#contact').on('click', function(){
		$('#slider #slides').animate({'margin-left': '-120.10em'}, 1000);
	});
	
	$('#about').on('click', function(){
		$('#slider #slides').animate({'margin-left': '0em'}, 1000);
	})
});
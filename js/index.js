let currentYear = new Date().getFullYear();
$('#year').text(currentYear);

$(window).scroll(function(){
	$('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
});
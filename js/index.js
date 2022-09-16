let currentDate = new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) ;
let currentYear = new Date().getFullYear();
let currentHour = new Date().getHours();

$('#year').text(currentYear);
$('#date').text(currentDate);

if (currentHour >= 1 && currentHour <= 12) {
	$('#greeting').text("Good Morning");
	$('#greeting').css("color", "#ffe9a6");
  } else if (currentHour >= 12 && currentHour <= 18) {
	$('#greeting').text("Good Afternoon");
	$('#greeting').css("color", "#FFB37B");
  } else {
	$('#greeting').text("Good Evening");
	$('#greeting').css("color", "#FF8866");
  }

$(window).scroll(function(){
	$('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
});
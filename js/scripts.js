"use strict";

$('.type-it').typeIt({
	 lifeLike: true,
     autoStart: false,
	 loop: true,
	 loopDelay: 5000
})
.tiType('Creative ideas showcasing your company’s ideas')
.tiPause(2000)
.tiDelete()
.tiType('Clean and straightforward UX / UI design')
.tiPause(2000)
.tiDelete()
.tiType('Full-stack (M.E.R.N.) development')
.tiPause(2000)
.tiDelete()
.tiType('Responsive web design')
.tiPause(2000)
.tiDelete()
.tiType('Bad juggling…like really really bad juggling')
.tiPause(2000)
.tiDelete()
.tiType('Teamwork...making it bettter by working together!');


// elements
var $page = $('.page');

$('.menu_toggle').on('click', function(){
  $page.toggleClass('shazam');
	if ($('.page').hasClass('shazam')) { $('.content').css({position:"fixed","width":'100%'}) } else { $('.content').css({position:"relative","width":'100%'}); }
});
$('.content').on('click', function(){
	$('.content').css({position:"relative","width":'100%'}); 
	$page.removeClass('shazam');
});

$('.bob').on('click', function(){
	$('.content').css({position:"relative","width":'100%'});   
	$page.removeClass('shazam');
	
});



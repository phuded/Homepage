$(document).ready(function() {
	/*Slides*/
	$('#slides').slides({
				preload: true,
				preloadImage: 'images/slides/loading.gif',
				play: 5000,
				pause: 2500,
				hoverPause: true,
				animationStart: function(current){
					$('.caption').animate({
						bottom:-35
					},100);
				},
				animationComplete: function(current){
					$('.caption').animate({
						bottom:0
					},200);
				},
				slidesLoaded: function() {
					$('.caption').animate({
						bottom:0
					},200);
				}
	});
}); 


function change(name){
	var allTabs = $(".menu-item a");
	allTabs.removeClass("selected");
	$(".menu-item a:contains('"+name+"')").addClass("selected");
		
	$(".tab_content:visible").fadeOut('fast',function() {
		$("#"+name+".tab_content").fadeIn();
	});
}
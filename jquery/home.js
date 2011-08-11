$(document).ready(function() {
	/*Slides*/
	if ($('#slides').length){
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
	}
}); 

$.expand = function(expand, contract, height){
	
	$('#'+contract).animate({
		height: '-='+height
	},
	500,
	function() {
		$('#'+expand).animate({height: '+='+height},500);
	});
	
	$('.show').toggle();
};
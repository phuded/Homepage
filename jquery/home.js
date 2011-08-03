$(document).ready(function() {
	var allTabs = $(".menu-item a");
	allTabs.click(function(){
		var content= $(this).attr("href");
		allTabs.removeClass("selected");
		$(this).addClass("selected");
		
		$(".tab_content:visible").fadeOut(function() {
			$("#"+content+".tab_content").fadeIn();
		});
	});
}); 
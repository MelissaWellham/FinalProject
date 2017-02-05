//Expand Employment

// Expand CV


$(document).ready(function(){
	$(".moreInfoEmployment").hide();
	$(".readMoreEmployment").click(function(event){
		event.preventDefault();
		$(this).hide(slide);
	})

});

function slide () {

	$(this).next(".moreInfoEmployment").show("slow");
	$(".readLessEmployment").show();
}

// Hide CV 

$(document).ready(function(){
	$(".readLessEmployment").click(function(event){
		event.preventDefault();
		$(this).hide(slide2);
	})
});

// function hideContent() {
// 	$(".moreInfo").slideUp("slow", slide2);
// }

function slide2 () {
	$(this).closest(".moreInfoEmployment").hide("slow");
	$(this).parent().siblings(".readMoreEmployment").show();
	// $(".readLess").hide();
	// $(".moreInfo").hide();
}

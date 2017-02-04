// Burger Menu 

$(document).ready(function(){
	$("#burger").click(function(event){
		event.preventDefault();
		$("#mobileMenu").toggleClass("active");
	})

}); 


// Expand About 

$(document).ready(function(){
	$(".moreMe").hide();
	$(".me").click(function(event){
		event.preventDefault();
		$(this).hide(slide);
	})

});

function slide () {

	$(this).next(".moreMe").show("slow");
}

// Hide About 

$(document).ready(function(){
	$(".moreMe").click(function(event){
		event.preventDefault();
		$(this).hide(slide2);
	})
});

// function hideContent() {
// 	$(".moreInfo").slideUp("slow", slide2);
// }

function slide2 () {
	$(this).closest(".moreMe").hide("slow");
	$(".me").show();
	// $(".readLess").hide();
	// $(".moreInfo").hide();
}


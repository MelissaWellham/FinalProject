// Burger Menu 

$(document).ready(function(){
	$("#burger").click(function(event){
		event.preventDefault();
		$("#mobileMenu").toggleClass("active");
	})

}); 

// Expand CV


$(document).ready(function(){
	$(".readMore").click(function(event){
		event.preventDefault();
		$(this).hide(slide);
	})

});

function slide () {

	$(this).next(".moreInfo").show("slow");
	$(".readLess").show();
}

// Hide CV 

$(document).ready(function(){
	$(".readLess").click(function(event){
		event.preventDefault();
		$(this).hide(slide2);
	})
});

// function hideContent() {
// 	$(".moreInfo").slideUp("slow", slide2);
// }

function slide2 () {
	$(this).closest(".moreInfo").hide("slow");
	$(".readMore").show();
	// $(".readLess").hide();
	// $(".moreInfo").hide();
}

//switchColour

$(document).ready(start);

function start() {
	console.log("Ready");
} 

$("#changeColor").click(revealText);

function revealText() {
	
	var color = $("body").hasClass("pink");

	if (color === true) {
		$("body").removeClass("pink");
	}

	else {
		$("body").addClass("pink");
		
	}
}

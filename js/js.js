// Burger Menu 

$(document).ready(function(){
	$("#burger").click(function(event){
		event.preventDefault();
		$("#mobileMenu").toggleClass("active");
	})

}); 

// Expand CV


$(document).ready(function(){
	$(".moreInfo").hide();
	$(".moreInfoEmployment").hide();
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
	$(this).parent().siblings(".readMore").show();
	// $(".readLess").hide();
	// $(".moreInfo").hide();
}


//switchColour

//$(document).ready(start);

// function start() {
// 	console.log("Ready");
// 	$("body").hasClass("black");
// 	$(".pink").hasClass("black");
// } 

// $("#changeColor").click(revealText);

// function revealText() {
	
// 	var color = $("body").hasClass("black");

// 	if (color === true) {
// 		$("body").addClass("pink");
// 	}

// 	else {
// 		$("body").addClass("black");
		
// 	}
// }

//Expand Employment

// Expand CV


$(document).ready(function(){
	$(".moreInfoEmployment").hide();
	$(".readMoreEmployment").click(function(event){
		event.preventDefault();
		$(this).hide(slide3);
	})

});

function slide3 () {

	$(this).next(".moreInfoEmployment").show("slow");
	$(".readLessEmployment").show();
}

// Hide CV 

$(document).ready(function(){
	$(".readLessEmployment").click(function(event){
		event.preventDefault();
		$(this).hide(slide4);
	})
});

// function hideContent() {
// 	$(".moreInfo").slideUp("slow", slide2);
// }

function slide4 () {
	$(this).closest(".moreInfoEmployment").hide("slow");
	$(this).parent().siblings(".readMoreEmployment").show();
	// $(".readLess").hide();
	// $(".moreInfo").hide();
}

// Expand About 

$(document).ready(function(){
	$(".moreMe").hide();
	$(".me").click(function(event){
		event.preventDefault();
		$(this).hide(slide5);
	})

});

function slide5 () {

	$(this).next(".moreMe").show("slow");
}

// Hide About 

$(document).ready(function(){
	$(".moreMe").click(function(event){
		event.preventDefault();
		$(this).hide(slide6);
	})
});

// function hideContent() {
// 	$(".moreInfo").slideUp("slow", slide2);
// }

function slide6 () {
	$(this).closest(".moreMe").hide("slow");
	$(this).siblings(".me").show(); //isues here
	// $(".readLess").hide();
	// $(".moreInfo").hide();
}

// Expand Portfolio

$(document).ready(function(){
	$(".moreTopic").hide();
	$(".topic").click(function(event){
		event.preventDefault();
		$(this).css("margin-bottom", "0"); 
		$(this).next(".moreTopic").show("slow");
	})

});

// // Hide Portfolio

// $(document).ready(function(){
// 	$(".topic").click(function(event){
// 		event.preventDefault();
// 		$(this).css("margin-bottom", "40px");
// 		$(this).next(".moreTopic").hide("slow");
// 	})
// });


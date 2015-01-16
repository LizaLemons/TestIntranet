
// Mark links in navbar as active
$(".nav a").on("click", function(){
	$(".nav").find(".active").removeClass("active");
	$(this).parent().addClass("active");
});

// Set margin-top of contentBox to be the height of the header/nav + 30
var heightOfNavbar = $("#navBar").height();
$("#contentBox").css({marginTop: heightOfNavbar + 30 + 'px'});
console.log($("#contentBox").css("margin-top"));

// Fade nav links by adding class 'fade'
$('#navbar li').mouseover(function() {
	$(this).siblings().addClass("fade");
}).mouseout(function() {
	$(this).siblings().removeClass("fade");
});


// Make border-bottom appear/disappear on scroll
$(window).scroll(function() {
	var value = $(window).scrollTop();
	if ( value > 0 ) {
		$('#header-nav-container').addClass('header-bottom-border');
	}
	else {
		$('#header-nav-container').removeClass('header-bottom-border');
	}
});



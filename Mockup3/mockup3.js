

// Set margin-top of main-and-footer-container equal to the height of the header/nav
var heightOfNavbar = $("#header-navbar").height();
$("#main-and-footer-container").css({marginTop: heightOfNavbar + -1 + 'px'});

// Set margin-bottom of main-and-footer-container equal to the height of the footer
var heightOfFooter = $("#footer-navbar").height();
$("#main-and-footer-container").css({marginBottom: heightOfFooter + -15 + 'px'});

// Mark links in navbar as active
$(".nav a").on("click", function(){
	$(".nav").find(".active").removeClass("active");
	$(this).parent().addClass("active");
});

// Fade nav links by adding class 'fade'
// Only main nav, not dropdown
//$('#navbar > ul > li').mouseover(function() {
//	$(this).siblings().addClass("fade");
//}).mouseout(function() {
//	$(this).siblings().removeClass("fade");
//});

// Make bottom shadow of header//footer appear & disappear on scroll
$(window).scroll(function() {
	var value = $(window).scrollTop();
	if ( value > 0 ) {
		$('#header-add-shadow').addClass('header-bottom-border');
		$('#footer-add-shadow').addClass('footer-bottom-border');
	} else {
		$('#header-add-shadow').removeClass('header-bottom-border');
		$('#footer-add-shadow').removeClass('footer-bottom-border');
	}
});



// Set margin-top of main-container-2 equal to the height of the header/nav
var heightOfNavbar = $("#header-navbar").height();
$("#main-container-2").css({marginTop: heightOfNavbar + -1 + 'px'});

// Set margin-bottom of main-container-2 equal to the height of the footer
var heightOfFooter = $("#footer-navbar").height();
$("#main-container-2").css({marginBottom: heightOfFooter + -15 + 'px'});

// Set height of main-container-2 = to height of window
var height = $(window).height();
$('#main-container-2').css('min-height', height + 'px');
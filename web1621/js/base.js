$(function(){
	$("#parts-navbar").load("parts/navbar.html",function(){
		var allhref=window.location.href;
		var link_name=allhref.split("/").pop().split(".").shift();
		$("#nav-"+link_name).addClass("active");
	});
	$("#parts-carousel").load("parts/carousel.html");
	$("#parts-friend-link").load("parts/friendlink.html");
	$("#license").load("parts/license.html");
})

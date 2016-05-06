var accordion = function () {
	$(".accordion").accordion();
};
var highlight = function () {
	$("li").click(function() {
		$(this).toggleClass("highlightHover");
	});
};
var toggleImage = function () {
	$(".toggleImage").click(function() {
		$("img").toggleClass("hiddenImage");
	});
};

$(document).ready(function () {
	accordion();
	highlight();
	toggleImage();
});

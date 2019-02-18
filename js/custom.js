$(document).ready(function() {
	/*-----------------------------------------------------------------------------------*/
	/*	Smooth Scroll
	/*  Thanks to: https://github.com/davist11/jQuery-One-Page-Nav
	/*-----------------------------------------------------------------------------------*/

	function smoothScroll(){
		$(".nav").onePageNav({
			filter: ':not(.js-no-scroll)',
			scrollSpeed: 1500,
		});

		// Scrolls to section
		$(".js-scroll").on("click", function(e) {
			scrollToSection = $(e.target).attr("href");
			photosOpened = $(".js-photo-dropdown-menu").hasClass("open");

			if (photosOpened) {
				Foundation.libs.dropdown.close($('.js-photo-dropdown-menu'));
			}

			$('html, body').animate({
				scrollTop: $(scrollToSection).offset().top
			}, 500);
			return false;
		});

		return false;
	}

	smoothScroll();

	/*-----------------------------------------------------------------------------------*/
	/*	Flexslider
	/*  Thanks to: http://www.woothemes.com/flexslider/
	/*-----------------------------------------------------------------------------------*/

	function flexSlider(){
		$('.flexslider').flexslider({
			animation: "slide",
			slideshow: false,
			touch: true
		});
	}

	flexSlider();

	$(".js-countdown").countdown("2019/11/9 18:30:00", function(event) {
		$(this).find(".js-countdown-days").html(event.strftime("%D") + "<br>days");
		$(this).find(".js-countdown-hours").html(event.strftime("%H") + "<br>hours");
		$(this).find(".js-countdown-minutes").html(event.strftime("%M") + "<br>minutes");
	});

	$(".link-to-dropdown-full-screen").on("click", function(e) {
		$(".active").removeClass("active");
	});
});

$(document).ready(function() {
	/*-----------------------------------------------------------------------------------*/
	/*	Smooth Scroll
	/*  Thanks to: https://github.com/davist11/jQuery-One-Page-Nav
	/*-----------------------------------------------------------------------------------*/

	function smoothScroll(){
		$(".nav").onePageNav({
			filter: ':not(.external)',
			scrollSpeed: 1500,
		});

		// Scrolls to section
		$(".js-scroll").on("click", function(e) {
			scrollToSection = $(e.target).attr("href");

			$('html, body').animate({
				scrollTop: $(scrollToSection).offset().top
			}, 500);
			return false;
		});

		return false;
	}

	smoothScroll();

	/*-----------------------------------------------------------------------------------*/
	/*	Backstretch
	/*  Thanks to: http://srobbin.com/jquery-plugins/backstretch/
	/*-----------------------------------------------------------------------------------*/

	function backStrech() {
		$("aside").backstretch([
			"img/placeholder-1.jpg",
			"img/placeholder-2.jpg",

			], {duration: 5000, fade: 1000});
	}

	backStrech();

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

	$(".js-countdown").countdown("2019/11/9", function(event) {
		$(this).find(".js-countdown-days").html(event.strftime("%D") + "<br>days");
		$(this).find(".js-countdown-hours").html(event.strftime("%H") + "<br>hours");
		$(this).find(".js-countdown-minutes").html(event.strftime("%M") + "<br>minutes");
	});
});

/*-----------------------------------------------------------------------------------*/
/*	Google Map API
/*  Credit to: http://stiern.com/tutorials/adding-custom-google-maps-to-your-website/
/*-----------------------------------------------------------------------------------*/

// var map;
// var myLatlng = new google.maps.LatLng(41.38031,2.17416); // Specify YOUR coordinates
//
// var MY_MAPTYPE_ID = 'custom_style';
//
// function initialize() {
//
// 	/*----------------------------------------------------------------------------*/
// 	/* Creates a custom color scheme for map
// 	/* For details on styling go to the link below:
// 	/* http://www.evoluted.net/thinktank/web-design/custom-google-maps-style-tool */
// 	/*----------------------------------------------------------------------------*/
//
// 	var featureOpts = [
// 		{
// 			"featureType": "road",
// 			"stylers": [
// 				{ "hue": "#ff3300" },
// 				{ "gamma": 0.82 },
// 				{ "visibility": "on" },
// 				{ "saturation": 62 },
// 				{ "lightness": -7 }
// 			]
// 		},{
// 			"featureType": "poi",
// 			"stylers": [
// 				{ "hue": "#ff0000" },
// 				{ "lightness": 14 }
// 			]
// 		},{
// 			"stylers": [
// 				{ "hue": "#ff0000" }
// 			]
// 		}
// 	]
//
// 	var mapOptions = {
// 		zoom: 18,
// 		center: myLatlng,
// 		disableDefaultUI: true,
// 		scrollwheel: false,
// 		draggable: false,
// 		mapTypeControlOptions: {
// 			mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
// 		},
// 		mapTypeId: MY_MAPTYPE_ID
// 	};
//
// 	map = new google.maps.Map(document.getElementById('map-canvas'),
// 		mapOptions);
//
// 	var styledMapOptions = {
// 		name: 'Custom Style'
// 	};
//
// 	var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);
//
// 	var image = new google.maps.MarkerImage("img/map-marker@2x.png", null, null, null, new google.maps.Size(55,57));
//
// 	// Includes custom marker on map
// 	var myLatLng = new google.maps.LatLng(41.38031,2.17416);
// 	var beachMarker = new google.maps.Marker({
// 		position: myLatLng,
// 		map: map,
// 		icon: image
// 	});
//
// 	map.mapTypes.set(MY_MAPTYPE_ID, customMapType);
// }
//
// google.maps.event.addDomListener(window, 'load', initialize);

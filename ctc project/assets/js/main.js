(function ($) {
	"use strict";

	/*------------------------------------
			Preloader
		--------------------------------------*/

	$(window).on('load', function () {
		$('#preloader').delay(350).fadeOut('slow');
		$('body').delay(350).css({ 'overflow': 'visible' });
	});


	// ---------------- Data CSS Js
	$("[data-background").each(function () {
		$(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
	});

	$("[data-width]").each(function () {
		$(this).css("width", $(this).attr("data-width"));
	});

	$("[data-bg-color]").each(function () {
		$(this).css("background-color", $(this).attr("data-bg-color"));
	});


	/*------------------------------------
		Mobile Menu
	--------------------------------------*/

	$('#mobile-menu').meanmenu({
		meanMenuContainer: '.mobile-menu',
		meanScreenWidth: "991",
		meanExpand: '+',
		meanShowChildren: true,
		meanExpandableChildren: true,
		meanContract: "-",
		meanDisplay: "block"
	});

	$('#mobile-menu-active').metisMenu();

	$('#mobile-menu-active .has-dropdown > a').on('click', function (e) {
		e.preventDefault();
	});

	$(".hamburger-menu > a").on("click", function (e) {
		e.preventDefault();
		$(".slide-bar").toggleClass("show");
		$("body").addClass("on-side");
		$('.body-overlay').addClass('active');
		$(this).addClass('active');
	});

	$(".close-mobile-menu > a").on("click", function (e) {
		e.preventDefault();
		$(".slide-bar").removeClass("show");
		$("body").removeClass("on-side");
		$('.body-overlay').removeClass('active');
		$('.hamburger-menu > a').removeClass('active');
	});

	$('.body-overlay').on('click', function () {
		$(this).removeClass('active');
		$(".slide-bar").removeClass("show");
		$("body").removeClass("on-side");
		$('.hamburger-menu > a').removeClass('active');
	});



	//sticky-menu
	$(window).on('scroll', function () {
		var scroll = $(window).scrollTop();
		if (scroll < 200) {
			$(".main-header-area").removeClass("sticky-menu");
		} else {
			$(".main-header-area").addClass("sticky-menu");
		}
	});

	// Add .active class to current navigation based on URL
	var pgurl = window.location.href.substr(window.location.href.lastIndexOf("/") + 1);
	$(".menu-list > li  a").each(function () {
		if ($(this).attr("href") == pgurl || $(this).attr("href") == '')
			$(this).addClass("active");
		// $(this).parent("li").addClass("active");
	})


	//shopping-cart-bar
	$(".shopping-cart").on("click", function () {
		$(".cart-menu-right").addClass('cart-info');
	});
	$(".close-icon").click(function () {
		$(".cart-menu-right").removeClass('cart-info');

	});


	//hero__slider
	const hero__slider = new Swiper('.hero__slider', {
		// Optional parameters
		direction: 'horizontal',
		slidesPerView: 1,
		loop: true,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},

		// If we need pagination
		pagination: {
			el: '.swiper-pagination',
			type: "fraction",
			clickable: true,
		},

		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},



	});


	//services__slide__one
	const services__slide__one = new Swiper('.services__slide__one', {
		// Optional parameters
		direction: 'horizontal',
		slidesPerView: 1,
		loop: true,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},

		// If we need pagination
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},

		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		breakpoints: {
			// when window width is >= 320px
			320: {
				slidesPerView: 1,
				spaceBetween: 20
			},
			575: {
				slidesPerView: 2,
				spaceBetween: 30
			},
			991: {
				slidesPerView: 3,
				spaceBetween: 40
			}
		}
	});



	//case__slider__one
	const case__slider__one = new Swiper('.case__slider__one', {
		// Optional parameters
		direction: 'horizontal',
		slidesPerView: 1,
		loop: true,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},

		breakpoints: {
			// when window width is >= 320px
			320: {
				slidesPerView: 1,
				spaceBetween: 0
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 0
			},
			991: {
				slidesPerView: 3,
				spaceBetween: 0
			},
			1200: {
				slidesPerView: 4,
				spaceBetween: 0
			}
		}
	});


	//case__slider__one
	const testimonial__slider__one = new Swiper('.testimonial__slider__one', {
		// Optional parameters
		direction: 'horizontal',
		slidesPerView: 1,
		loop: true,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},

		breakpoints: {
			// when window width is >= 320px
			320: {
				slidesPerView: 1,
				spaceBetween: 0
			},
			// when window width is >= 980px
			980: {
				slidesPerView: 2,
				spaceBetween: 30
			},

		}
	});



	//hero__thumbs__slider
	const hero__thumbs__slider = new Swiper('.hero__thumbs__slider', {
		// Optional parameters
		direction: 'horizontal',
		slidesPerView: 3,
		loop: true,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},

		breakpoints: {
			// when window width is >= 320px
			320: {
				slidesPerView: 1,
				spaceBetween: 0
			},
			// when window width is >= 576px
			576: {
				slidesPerView: 3,
				spaceBetween: 0
			},

		}
	});

	//hero__slider__two
	const hero__slider__two = new Swiper('.hero__slider__two', {
		// Optional parameters
		direction: 'horizontal',
		slidesPerView: 1,
		loop: true,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		thumbs: {
			swiper: hero__thumbs__slider,
		},
		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});



	//services__slider__two
	const services__slider__two = new Swiper('.services__slider__two', {
		// Optional parameters
		direction: 'horizontal',
		slidesPerView: 2,
		loop: true,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},

		// If we need pagination
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},

		breakpoints: {
			// when window width is >= 320px
			320: {
				slidesPerView: 1,
				spaceBetween: 20
			},
			575: {
				slidesPerView: 2,
				spaceBetween: 30
			},
			991: {
				slidesPerView: 3,
				spaceBetween: 50
			}
		}
	});


	//brand__slider__one
	const brand__slider__one = new Swiper('.brand__slider__one', {
		// Optional parameters
		direction: 'horizontal',
		slidesPerView: 2,
		loop: true,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},

		breakpoints: {
			// when window width is >= 320px
			320: {
				slidesPerView: 1,
				spaceBetween: 20
			},
			// when window width is >= 480px
			575: {
				slidesPerView: 3,
				spaceBetween: 30
			},
			// when window width is >= 640px
			991: {
				slidesPerView: 4,
				spaceBetween: 50
			},
			1200: {
				slidesPerView: 5,
				spaceBetween: 50
			}
		}
	});


	//brand__slider__two
	const brand__slider__two = new Swiper('.brand__slider__two', {
		// Optional parameters
		direction: 'horizontal',
		slidesPerView: 2,
		loop: true,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},

		breakpoints: {
			// when window width is >= 320px
			320: {
				slidesPerView: 1,
				spaceBetween: 0
			},
			// when window width is >= 480px
			575: {
				slidesPerView: 3,
				spaceBetween: 0
			},
			// when window width is >= 640px
			991: {
				slidesPerView: 4,
				spaceBetween: 0
			},
			1200: {
				slidesPerView: 5,
				spaceBetween: 0
			}
		}
	});



	//case__slider__two
	const case__slider__two = new Swiper('.case__slider__two', {
		// Optional parameters
		direction: 'horizontal',
		slidesPerView: "auto",
		loop: true,
		centeredSlides: true,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},

		// If we need pagination
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},

		breakpoints: {
			// when window width is >= 320px
			320: {
				slidesPerView: 1,
				spaceBetween: 20,
				centeredSlides: false,
			},
			// when window width is >= 480px
			768: {
				slidesPerView: 2,
				spaceBetween: 30,
				centeredSlides: false,
			},
			// when window width is >= 640px
			991: {
				slidesPerView: 3,
				spaceBetween: 30
			}
		}
	});


	//testimonial__slider__two
	const testimonial__slider__two = new Swiper('.testimonial__slider__two', {
		// Optional parameters
		direction: 'horizontal',
		slidesPerView: 3.5,
		loop: true,
		centeredSlides: false,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},

		breakpoints: {

			320: {
				slidesPerView: 1,
				spaceBetween: 20,
			},
			800: {
				slidesPerView: 2,
				spaceBetween: 30,
			},
			991: {
				slidesPerView: 3,
				spaceBetween: 30,
			},
			1200: {
				slidesPerView: 3.5,
				spaceBetween: 30,
			}
		},

	});


	//portfolio__slider
	const portfolio__slider = new Swiper('.portfolio__slider', {
		// Optional parameters
		direction: 'horizontal',
		slidesPerView: 1,
		loop: true,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},

		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		breakpoints: {
			// when window width is >= 320px
			320: {

			},
		}
	});

	//hero__slider__three
	const hero__slider__three = new Swiper('.hero__slider__three', {
		// Optional parameters
		direction: 'horizontal',
		slidesPerView: 1,
		loop: true,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},

		scrollbar: {
			el: '.swiper-scrollbar',
			hide: false,
		},

		// If we need pagination
		pagination: {
			el: '.swiper-pagination',
			type: "fraction",
			clickable: true,
		},

		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},

	});


	//testimonial__slider__three
	const testimonial__slider__three = new Swiper('.testimonial__slider__three', {
		// Optional parameters
		direction: 'horizontal',
		slidesPerView: 1,
		loop: true,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},

		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},

		breakpoints: {
			// when window width is >= 320px
			320: {
				slidesPerView: 1,
				spaceBetween: 20
			},
			// when window width is >= 768px
			800: {
				slidesPerView: 2,
				spaceBetween: 30
			},
			// when window width is >= 991px
			991: {
				slidesPerView: 2,
				spaceBetween: 30
			},
			1200: {
				slidesPerView: 2,
				spaceBetween: 70
			}
		}
	});


	//teams__slider__one
	const teams__slider__one = new Swiper('.teams__slider__one', {
		// Optional parameters
		direction: 'horizontal',
		slidesPerView: 1,
		loop: true,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},

		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},

		breakpoints: {
			// when window width is >= 320px
			320: {
				slidesPerView: 1,
				spaceBetween: 20
			},
			800: {
				slidesPerView: 2,
				spaceBetween: 30
			},
			991: {
				slidesPerView: 3,
				spaceBetween: 30
			},

		}
	});


	//product__thumbs__slider
	const product__thumbs__slider = new Swiper('.product__thumbs__slider', {
		// Optional parameters
		direction: 'horizontal',
		slidesPerView: 4,
		spaceBetween: 10,
		loop: true,
		slideToClickedSlide: true,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},

		breakpoints: {
			// when window width is >= 320px
			320: {
				slidesPerView: 2,
				spaceBetween: 0
			},
			// when window width is >= 576px
			576: {
				slidesPerView: 3,
				spaceBetween: 0
			},
			// when window width is >= 768
			768: {
				slidesPerView: 4,
				spaceBetween: 10
			},

		}
	});

	//product__slider
	const product__slider = new Swiper('.product__slider', {
		// Optional parameters
		direction: 'horizontal',
		slidesPerView: 1,
		loop: true,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		thumbs: {
			swiper: product__thumbs__slider,
		},
		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});


	//blog__img__gallery
	const blog__img__gallery = new Swiper('.blog__img__gallery', {
		// Optional parameters
		direction: 'horizontal',
		slidesPerView: 1,
		loop: true,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},

		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},

		breakpoints: {
			// when window width is >= 320px
			320: {
				slidesPerView: 1,
			},

		}
	});


	// -------------------- price btn
	$(".price-btn").click(function () {

		var lable = $(".price-btn").text().trim();

		if (lable == "Monthly") {
			$(".price-btn").text("Yearly");
			$(".yearly-price").show();
			$(".monthly-price").hide();
		}
		else {
			$(".price-btn").text("Monthly");
			$(".monthly-price").show();
			$(".yearly-price").hide();
		}

	});

	$(function () {
		$('.chart').easyPieChart({
			animate: {
				duration: 1000,
				enabled: true
			},
			scaleLength: 0,
			size: 140,
			trackColor: '#2a83d54d',
			barColor: '#2a83d5',
			scaleColor: 'false',
			lineWidth: 10,
			trackWidth: 10,
			lineCap: 'round',
			rotate: 90,
		});
	});


	// -------------------- Remove Placeholder When Focus Or Click
	$("input,textarea").each(function () {
		$(this).data('holder', $(this).attr('placeholder'));
		$(this).on('focusin', function () {
			$(this).attr('placeholder', '');
		});
		$(this).on('focusout', function () {
			$(this).attr('placeholder', $(this).data('holder'));
		});
	});


	/* magnificPopup video view */
	$('.popup-video').magnificPopup({
		type: 'iframe'
	});



	/* Cart Plus Minus Js */
	$(".cart-plus-minus").append('<div class="dec qtybutton">-</div><div class="inc qtybutton">+</div>');
	$(".qtybutton").on("click", function () {
		var $button = $(this);
		var oldValue = $button.parent().find("input").val();
		if ($button.text() == "+") {
			var newVal = parseFloat(oldValue) + 1;
		} else {
			// Don't allow decrementing below zero
			if (oldValue > 0) {
				var newVal = parseFloat(oldValue) - 1;
			} else {
				newVal = 0;
			}
		}
		$button.parent().find("input").val(newVal);
	});

	//jquiry-price-slider
	$(function () {
		$("#slider-range").slider({
			range: true,
			min: 0,
			max: 500,
			values: [75, 300],
			slide: function (event, ui) {
				$("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
			}
		});
		$("#amount").val("$" + $("#slider-range").slider("values", 0) +
			" - $" + $("#slider-range").slider("values", 1));
	});


	// scrollToTop
	$.scrollUp({
		scrollName: 'scrollUp', // Element ID
		topDistance: '300', // Distance from top before showing element (px)
		topSpeed: 500, // Speed back to top (ms)
		animation: 'fade', // Fade, slide, none
		animationInSpeed: 9000, // Animation in speed (ms)
		animationOutSpeed: 9000, // Animation out speed (ms)
		scrollText: '<i class="fas fa-chevron-double-up"></i>', // Text for element
		activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
	});



	//jquiry-price-slider
	$(function () {
		$("#slider-range").slider({
			range: true,
			min: 0,
			max: 500,
			values: [75, 300],
			slide: function (event, ui) {
				$("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
			}
		});
		$("#amount").val("$" + $("#slider-range").slider("values", 0) +
			" - $" + $("#slider-range").slider("values", 1));
	});



	$('.counter').counterUp({
		delay: 10,
		time: 2000
	});

	$('select').niceSelect();

	AOS.init();




})(jQuery);
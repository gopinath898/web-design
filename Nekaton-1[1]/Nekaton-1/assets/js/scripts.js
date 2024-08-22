/*
Author       : Tech Trek.
Template Name: Nekaton - Responsive School Template
Version      : 1.0
*/

/*=============================================
TABLE OF CONTENTS
================================================

01. PRELOADER JS
02. JQUERY STICKY MENU
03. MENU JS
04. SECTIONS BACKGROUNDS
05. BOOTSTRAP TOOLTIP
06. HOME SLIDER JS             
07. TEAM SLIDER JS
08. TESTIMONIAL SLIDER JS
09. BLOG SLIDER JS
10. SERVICE SLIDER JS
11. BLOG GALLERY SLIDER JS
12. CLIENT SLIDER JS
13. CLASSES SLIDER JS
14. COUNTER SECTION JS
15. ACCORDION JS 
16. PORTFOLIO JS
17. VENOBOX JS
18. TIMER JS
20. IMAGE ZOOM JS
21. WOW JS

Table Of Contents end
================================================
*/

(function ($) {
	'use strict';

	jQuery(document).on('ready', function () {

		/* 01. PRELOADER JS */
		$(window).on('load', function () {
			function fadeOut(el) {
				el.style.opacity = 0.4;
				var last;
				var tick = function () {
					el.style.opacity = +el.style.opacity - (new Date() - last) / 600;
					last = +new Date();
					if (+el.style.opacity > 0) {
						(window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 100);
					} else {
						el.style.display = "none";
					}
				};
				tick();
			}
			var pagePreloaderId = document.getElementById("page-preloader");
			setTimeout(function () {
				fadeOut(pagePreloaderId)
			}, 1000);
		});


		/* 02. JQUERY STICKY MENU */
		$(".sticky-menu").sticky({
			topSpacing: 0,
			zIndex: 999
		});


		/* 03. MENU JS */
		$('nav.navbar').meanmenu({
			meanMenuContainer: '.mainmenu-area',
			meanScreenWidth: "991"
		});

		$(window).on('scroll', function () {
			if ($(this).scrollTop() > 200) {
				$('.mainmenu-area').addClass('menu-animation');
			} else {
				$('.mainmenu-area').removeClass('menu-animation');
			}
		});

        $('a.js-scroll-trigger').on('click', function(e) {
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 48
            }, 1000);
            e.preventDefault();
        });
		
		// Activate scrollspy to add active class to navbar items on scroll
        $('body').scrollspy({
            target: '.mainmenu-area',
            offset: 84
        });
		



		/* 04. SECTIONS BACKGROUNDS */
		var pageSection = $("section,div");
		pageSection.each(function (indx) {
			if ($(this).attr("data-background")) {
				$(this).css("background-image", "url(" + $(this).data("background") + ")");
			}
		});


		/* 05. BOOTSTRAP TOOLTIP */
		$('[data-toggle="tooltip"]').tooltip()


		/* 06. HOME SLIDER JS */
		$('.home-slides').owlCarousel({
			loop: true,
			autoplay: false,
			autoplayTimeout: 4000,
			dots: true,
			nav: true,
			navText: ["<i class='icofont-simple-left'></i>", "<i class='icofont-simple-right'></i>"],
			responsiveClass: true,
			responsive: {
				0: {
					items: 1,
					nav: false
				},
				600: {
					items: 1,
					nav: false
				},
				768: {
					items: 1,
					nav: true
				},
				1000: {
					items: 1,
					nav: true
				}
			}
		});


		/* 07. TEAM SLIDER JS */
		$('.team-slides').owlCarousel({
			items: 4,
			margin: 30,
			loop: true,
			autoplay: false,
			autoplayTimeout: 4000,
			nav: false,
			navText: ["<i class='icofont-long-arrow-left'></i>", "<i class='icofont-long-arrow-right'></i>"],
			dots: true,
			responsiveClass: true,
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 1
				},
				768: {
					items: 3
				},
				1000: {
					items: 4
				}
			}

		});


		/* 08. TESTIMONIAL SLIDER JS */
		$('.testimonial-wrapper').owlCarousel({
			loop: true,
			margin: 0,
			autoplay: false,
			animateIn: "fadeInDown",
			animateOut: "fadeOutDown",
			nav: false,
			navText: ["<i class='icofont-long-arrow-left'></i>", "<i class='icofont-long-arrow-right'></i>"],
			autoHeight: true,
			dots: true,
			dotsData: true,
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 1
				},
				1000: {
					items: 1
				}
			}
		});

		var owltestimonial = $('.testimonial-wrapper');
		$('.testimonial-wrapper.owl-theme .owl-dots .owl-dot').click(function () {
			owltestimonial.trigger('to.owl.carousel', [$(this).index(), 300]);
		});


		/* 09. BLOG SLIDER JS */
		$('.blog-slides').owlCarousel({
			items: 3,
			margin: 30,
			loop: true,
			autoplay: false,
			autoplayTimeout: 4000,
			nav: false,
			dots: true,
			navText: ["<i class='icofont-long-arrow-left'></i>", "<i class='icofont-long-arrow-right'></i>"],
			responsiveClass: true,
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 1
				},
				768: {
					items: 2
				},
				1000: {
					items: 3
				}
			}
		});


		/* 10. SERVICE SLIDER JS */
		$('.service-slides-wrapper').owlCarousel({
			loop: true,
			margin: 0,
			autoplay: false,
			nav: true,
			navText: ["<i class='icofont-rounded-left'></i>", "<i class='icofont-rounded-right'></i>"],
			autoHeight: true,
			dots: true,
			dotsData: true,
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 1
				},
				1000: {
					items: 1
				}
			}
		});

		var owlclass = $('.service-slides-wrapper');
		$('.service-slides-wrapper.owl-theme .owl-dots .owl-dot').click(function () {
			owlclass.trigger('to.owl.carousel', [$(this).index(), 300]);
		});


		/* 11. BLOG GALLERY SLIDER JS */
		$('.gallery-slides-wrapper').owlCarousel({
			loop: true,
			margin: 0,
			autoplay: false,
			nav: true,
			navText: ["<i class='icofont-rounded-left'></i>", "<i class='icofont-rounded-right'></i>"],
			autoHeight: true,
			dots: false,
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 1
				},
				1000: {
					items: 1
				}
			}
		});


		/* 12. CLIENT SLIDER JS */
		$('.clients-slides').owlCarousel({
			loop: true,
			margin: 30,
			autoplay: true,
			nav: false,
			autoHeight: true,
			responsiveClass: true,
			responsive: {
				0: {
					items: 1,
					dots: true
				},
				600: {
					items: 2,
					dots: true
				},
				768: {
					items: 4,
					dots: false
				},
				1000: {
					items: 5,
					dots: false
				}
			}
		});


		/* 13. CLASSES SLIDER JS */

		$('.fea-class-slides').owlCarousel({
			items: 3,
			margin: 30,
			loop: true,
			autoplay: false,
			autoplayTimeout: 4000,
			dots: true,
			nav: false,
			navText: ["<i class='icofont-rounded-left'></i>", "<i class='icofont-rounded-right'></i>"],
			responsiveClass:true,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				768:{
					items:2
				},
				1000:{
					items:3
				}
			}
		});


		/* 14. COUNTER SECTION JS */
		$('#counter').on('inview', function (event, visible, visiblePartX, visiblePartY) {
			if (visible) {
				$(this).find('.timer').each(function () {
					var $this = $(this);
					$({
						Counter: 0
					}).animate({
						Counter: $this.text()
					}, {
						duration: 2000,
						easing: 'swing',
						step: function () {
							$this.text(Math.ceil(this.Counter));
						}
					});
				});
				$(this).unbind('inview');
			}
		});


		/* 15. ACCORDION JS */
		var selectIds = $('#panel1,#panel2,#panel3,#panel4,#panel5');
		$(function ($) {
			selectIds.on('show.bs.collapse hidden.bs.collapse', function () {
				$(this).prev().find('.icofont').toggleClass('icofont-minus icofont-plus');
			})
		});


		/* 16. PORTFOLIO JS */
		$(".portfolio-filter-menu ul li").click(function () {
			$(".portfolio-filter-menu ul li").removeClass("active");
			$(this).addClass("active");
			var selector = $(this).attr("data-filter");
			$(".project-list").isotope({
				filter: selector,
			});
		});

		$(".project-list").isotope();


		/* 17. VENOBOX JS */
		$('.venobox').venobox({
			titleattr: 'data-title',
			spinner: 'three-bounce',
			titlePosition: 'bottom',
			titleColor: '#fff',
			spinColor: '#fff',
			numeratio: true,
			numerationPosition: 'top'
		});


        /* 18. TIMER JS */
		
        $('#clock').countdown('2021/12/31', function(event) {
            var $this = $(this).html(event.strftime('' + '<h4>%d :<span>Days</span></h4>' + '<h4>%H :<span>hr</span></h4>' + '<h4>%M :<span>min</span></h4>' + '<h4>%S <span>sec</span></h4>'));
        });


        /* 19. COPYRIGHT JS */
		var dteNow = new Date();
		var intYear = dteNow.getFullYear();

		$('#copyright').each(function() {
		    var text = $(this).text();
		    $(this).text(text.replace('CurrentCopyrightYear', intYear)); 
		});


		/* 20. IMAGE ZOOM JS */
		$('#zoom_01').elevateZoom({
			scrollZoom : true,
			cursor: "crosshair",
			zoomWindowFadeIn: 500,
			zoomWindowFadeOut: 750
	    });

	   

	});


	/* 21. WOW JS */
	new WOW().init();


})(jQuery);